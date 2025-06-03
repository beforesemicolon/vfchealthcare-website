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
    let totalAttachmentSize = 0;
    const MAX_ATTACHMENT_SIZE = 500 * 1024; // 500KB for all attachments

    for (let [key, value] of formData) {
      if (!(value instanceof File) && !(value instanceof FileList)) {
        data[key] = typeof value === 'string' ? value.trim() : value;
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
        data[`attachment_${fileCount + 1}`] = await fileToBase64(file);
        data[`filename_${fileCount + 1}`] = file.name;
        totalAttachmentSize += file.size;
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
