function handleForm(formId, emailTemplate = 'vfc_service_request') {
  const form = document.getElementById(formId);
  const successBtn = form.querySelector('.success-request-message button');
  
  function handleError(err) {
    console.error(err);
    form.className = 'failed-request-message';
  }
  
  successBtn.addEventListener('click', () => {
    form.className = '';
  })
  
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    form.className = '';
    
    if (!form.checkValidity()) {
      form.className = 'invalid-form';
      scrollTo(form.clientTop, form.clientLeft);
      return;
    }
    
    grecaptcha.ready(function () {
      grecaptcha.execute("6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr", {action: "signup"}).then(function (token = '') {
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
          data[key] = value;
        });

        emailjs.send("beforesemi", emailTemplate, {
            ...data,
            "g-recaptcha-response": token
          })
          .then(() => {
            form.reset();
            form.className = 'success-request';
          })
          .catch(handleError);
      }).catch(handleError);
    });
  })
}
