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
    
    for (let [key, value] of formData) {
      if (value instanceof File) {
        data[key] = await fileToBase64(value);
        data['filename'] = value.name;
      } else {
        data[key] = value.trim();
      }
    }
    
    emailjs.send("vfc_service_info", currentForm.emailTemplate, {
        ...data,
        "g-recaptcha-response": token
      })
      .then(() => {
        currentForm.form.reset();
        currentForm.form.className = 'success-request';
      })
      .catch(err => {
        console.error(err);
        currentForm.form.className = 'failed-request';
      });
    
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
    grecaptcha.reset();
  } catch(e) {
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
