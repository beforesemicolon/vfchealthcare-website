function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file); // Read file as Base64
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

let currentForm = {};

async function SubmitForm(token = '') {
  try {
    const formData = new FormData(currentForm.form);
    const data = {};
    let fileCount = 0;
    let totalAttachmentSize = 0;
    let totalVariablesSize = 0;
    const MAX_ATTACHMENT_SIZE = 500 * 1024; // 500KB for all attachments
    const MAX_VARIABLES_SIZE = 50 * 1024; // 50KB for EmailJS

    // Add non-file fields to data and count their size
    for (let [key, value] of formData) {
      if (!(value instanceof File) && !(value instanceof FileList)) {
        data[key] = typeof value === 'string' ? value.trim() : value;
        totalVariablesSize += String(data[key]).length;
      }
    }

    // Explicitly handle file input
    const fileInput = currentForm.form.querySelector('input[type="file"][name="attachment"]');
    if (fileInput && fileInput.files && fileInput.files.length) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        if (totalAttachmentSize + file.size > MAX_ATTACHMENT_SIZE) {
          return alert(`Total attachment size exceeds ${MAX_ATTACHMENT_SIZE / 1024}KB. Please reduce the size of your attachments.`);
        }
        // Estimate base64 size
        const base64 = await fileToBase64(file);
        const base64Size = Math.ceil(file.size * 4 / 3);
        data[`attachment_${fileCount + 1}`] = base64;
        data[`filename_${fileCount + 1}`] = file.name;
        totalAttachmentSize += file.size;
        totalVariablesSize += base64.length + file.name.length;
        fileCount++;
      }
    }

    // Check total variables size for EmailJS
    if (totalVariablesSize > MAX_VARIABLES_SIZE) {
      return alert(`Total data size exceeds EmailJS 50KB limit. Please reduce the size or number of attachments.`);
    }

    await emailjs.send("vfc_service_info", currentForm.emailTemplate, {
      ...data,
      ...(token ? {"g-recaptcha-response": token} : {})
    });

    currentForm.form.reset();
    currentForm.form.className = 'success-request';
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
    location.hostname !== 'localhost' && grecaptcha.reset();
  } catch (e) {
    console.error("Error submitting form:", e);
    currentForm.form.className = 'failed-request';
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
  }
}

function handleForm(formId, emailTemplate = 'vfc_service_request') {
  try {
    const form = document.getElementById(formId);
    const successBtn = form.querySelector('.success-request-message button');
    const failedBtn = form.querySelector('.failed-request-message button');
    
    [successBtn, failedBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        form.className = '';
      })
    })
    
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      form.className = '';
      
      if (!form.checkValidity()) {
        form.className = 'invalid-form';
        scrollTo(form.clientTop, form.clientLeft);
      } else {
        form.className = 'sending-form';
        currentForm = {form, emailTemplate};
        grecaptcha.execute()
      }
    })
  } catch (e) {
    console.error(`Error handling form with ID ${formId}:`, e);
  }
}
