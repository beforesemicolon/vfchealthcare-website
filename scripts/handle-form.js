function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file); // Read file as Base64
    reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64 content
    reader.onerror = (error) => reject(error);
  });
}

function handleForm(formId, emailTemplate = 'vfc_service_request') {
  const form = document.getElementById(formId);
  const successBtn = form.querySelector('.success-request-message button');
  
  function handleError(err) {
    console.error(err);
    form.className = 'failed-request';
  }
  
  successBtn.addEventListener('click', () => {
    form.className = '';
  })
  
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    form.className = '';
    
    // if (!form.checkValidity()) {
    //   form.className = 'invalid-form';
    //   scrollTo(form.clientTop, form.clientLeft);
    //   return;
    // }
    
    grecaptcha.execute("6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr", {action: "signup"}).then(async function (token = '') {
      const formData = new FormData(form);
      const data = {};

      for (let [key, value] of formData) {
        if (value instanceof File) {
          data[key] = await fileToBase64(value);
          data['filename'] = value.name;
        } else {
          data[key] = value.trim();
        }
      }

      console.log(data, token);

      // emailjs.sendForm("beforesemi", emailTemplate, {
      //     ...data,
      //     "g-recaptcha-response": token
      //   })
      //   .then(() => {
      //     form.reset();
      //     form.className = 'success-request';
      //   })
      //   .catch(handleError);
    }).catch(handleError);
  })
}
