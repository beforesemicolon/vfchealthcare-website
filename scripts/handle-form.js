function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file); // Read file as Base64
    reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64 content
    reader.onerror = (error) => reject(error);
  });
}

let currentForm = {};

async function SubmitForm(token) {
  try {
    const formData = new FormData(currentForm.form);
    const data = {};
    let fileCount = 0;
    let totalBase64Size = 0;
    const MAX_FILES = 5;
    const MAX_TOTAL_SIZE = 40 * 1024; // 40KB for all attachments

    // Add all non-file fields
    for (let [key, value] of formData) {
      if (!(value instanceof File) && !(value instanceof FileList)) {
        data[key] = typeof value === 'string' ? value.trim() : value;
      }
    }

    // Explicitly handle file input
    const fileInput = currentForm.form.querySelector('input[type="file"][name="attachment"]');
    if (fileInput && fileInput.files && fileInput.files.length) {
      for (let i = 0; i < fileInput.files.length && fileCount < MAX_FILES; i++) {
        const file = fileInput.files[i];
        const base64 = await fileToBase64(file);
        const base64Size = Math.ceil((base64.length * 3) / 4);
        if (totalBase64Size + base64Size > MAX_TOTAL_SIZE) {
          return alert(`Total attachment size exceeds ${MAX_TOTAL_SIZE / 1024}KB. Please reduce the size of your attachments.`);
        }
        data[`attachment_${fileCount + 1}`] = base64;
        data[`filename_${fileCount + 1}`] = file.name;
        totalBase64Size += base64Size;
        fileCount++;
      }
    }

    await emailjs.send("vfc_service_info", currentForm.emailTemplate, {
      ...data,
      "g-recaptcha-response": token
    });

    currentForm.form.reset();
    currentForm.form.className = 'success-request';
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
    grecaptcha.reset();
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
