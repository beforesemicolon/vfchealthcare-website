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

    for (let [key, value] of formData) {
      if (value instanceof FileList) {
        for (let i = 0; i < value.length && fileCount < MAX_FILES; i++) {
          const file = value[i];
          // Convert to Base64 and check size
          const base64 = await fileToBase64(file);
          const base64Size = Math.ceil((base64.length * 3) / 4); // Approximate original size
          if (totalBase64Size + base64Size > MAX_TOTAL_SIZE) break;
          data[`attachment_${fileCount + 1}`] = base64;
          data[`filename_${fileCount + 1}`] = file.name;
          totalBase64Size += base64Size;
          fileCount++;
        }
      } else if (value instanceof File) {
        if (fileCount < MAX_FILES) {
          const base64 = await fileToBase64(value);
          const base64Size = Math.ceil((base64.length * 3) / 4);
          if (totalBase64Size + base64Size <= MAX_TOTAL_SIZE) {
            data[`attachment_${fileCount + 1}`] = base64;
            data[`filename_${fileCount + 1}`] = value.name;
            totalBase64Size += base64Size;
            fileCount++;
          }
        }
      } else {
        data[key] = typeof value === 'string' ? value.trim() : value;
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
