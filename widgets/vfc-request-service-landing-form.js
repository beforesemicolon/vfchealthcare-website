export default {
   id: "vfc-request-service-landing-form",
   title: "Request service form",
  inputs: [
    {
      name: "phrase",
      type: "text",
      value: 'We are your healthcare solution.'
    },
    {
      name: "reCAPTCHA",
      label: "reCAPTCHA site key",
      type: "text",
      value: '6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr'
    },
    {
      name: "form",
      type: "group",
      definitions: [
        {
          name: 'title',
          type: 'text',
          value: 'Request a Service'
        },
        {
          name: 'labels',
          type: 'group',
          definitions: [
            {
              name: 'name',
              type: 'text',
              value: 'Full Name *'
            },
            {
              name: 'email',
              type: 'text',
              value: 'Email'
            },
            {
              name: 'phone',
              type: 'text',
              value: 'Phone Number *'
            },
            {
              name: 'services',
              type: 'text',
              value: 'Services *'
            }
          ]
        },
        {
          name: 'services',
          type: 'options',
          value: 'adult foster/family care',
          definitions: [
            {
              label: 'Adult Foster/Family care',
              value: 'adult foster/family care',
            },
            {
              label: 'Home care',
              value: 'home care'
            },
            {
              label: 'Nurse Recruiting/Staffing',
              value: 'nurse staffing'
            },
            {
              label: 'Nurse Case Management',
              value: 'nurse case management'
            },
            {
              label: 'Other',
              value: 'other'
            }
          ]
        },
        {
          name: 'disclosure',
          type: 'textarea',
          value: 'By requesting care I understand that VFC may contact me at this number via calls or texts (including through use of an automatic telephone dialing system) to provide information about or to help me enroll in my requested service. Message and data rates may apply.'
        },
        {
          name: 'button',
          type: 'text',
          value: 'Send Request'
        }
      ]
    }
  ],
  style: `
#request-service {
 background: #E5E0DA;
 position: relative;
}

#request-service .hero-image {
 overflow: hidden;
}

#request-service img {
 transform: translateX(-50px);
}

#request-service .form-container {
 color: #fff;
 position: relative;
 background: var(--vfc-color);
 display: flex;
 gap: 20px;
 height: 65px;
}

#request-service h2 {
 font-size: 34px;
 flex: 1;
 margin: 10px 20px 10px 0;
 text-wrap: nowrap;
}

#request-service form {
 background: #fff;
 color: #222;
 border-radius: 5px;
 overflow: hidden;
 flex: 1;
 margin-top: -450px;
 margin-right: 5%;
 transform: translateY(15%);
 box-shadow: -3px 6px 10px rgba(0, 0, 0, 0.1);
 height: max-content;
}

@media screen and (max-width: 1024px) {
 
 #request-service .hero-image {
  padding: 0;
 }
 
 #request-service img {
  transform: none;
  height: auto !important;
  width: 100%;
 }
 
 #request-service .form-container {
  flex-direction: column;
  height: auto;
  padding: 0;
  gap: 0;
 }
 
 #request-service h2 {
  display: none;
 }
 
 #request-service form {
  margin: 0;
  transform: none;
  box-shadow: none;
  border-radius: 0;
 }
}

@media screen and (max-width: 425px) {
 #request-service .hero-image {
  height: 60vh;
  position: relative;
 }
 
 #request-service img {
  position: absolute;
  left: 70%;
  top: 50%;
  width: auto;
  min-width: 100%;
  min-height: 100% !important;
  transform: translate(-50%, -50%);
  max-width: unset;
 }
}

#request-service form h3 {
 background: var(--vfc-highlight-color);
 font-size: 32px;
 text-align: center;
 padding: 10px 0;
 color: #fff;
}

#request-service form .disclosure {
 font-size: 14px;
 line-height: 110%;
 color: #666;
}

#request-service form fieldset {
 padding: 0 25px;
}
`,
  render: ({phrase, reCAPTCHA, env} = {}) => `
<section id="request-service">
  <div class="wrapper hero-image">
   <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-warm-care.jpg" alt="VFC healthcare solution warm services"
        height="400">
  </div>
  <div class="wrapper form-container">
   <h2>${phrase}</h2>
   <form id="service-request" class="sending-form">
    <h3>Request Service</h3>
    <p class="error-check-msg">Please fix the invalid fields before you send.</p>
    <fieldset>
     <legend>Contact Information *</legend>
     <label aria-label="full name"><input type="text" name="fullname" placeholder="Full Name *" required
                                          pattern="^(\\w\\w+)\\s(\\w+)$"
                                          title="Must be full name, for example: John Doe, Jane D"></label>
     <label aria-label="email"><input type="email" name="email" placeholder="Email"></label>
     <label aria-label="phone">
      <input type="tel" name="phone" placeholder="Phone Number *" required>
     </label>
    </fieldset>
    <fieldset>
     <legend>Service *</legend>
     <label aria-label="service">
      <select name="service">
       <option value="adult foster/family care" selected>Adult Foster/Family Care</option>
       <option value="home care">Home care</option>
       <option value="nurse staffing">Nurse Recruiting/Staffing</option>
       <option value="nurse case management">Nurse Case Management</option>
       <option value="other">Other</option>
      </select>
     </label>
    </fieldset>
    <fieldset>
     <p class="disclosure">
      <small>
       By requesting care I understand that VFC may contact me at this number via calls or texts (including
       through use of an automatic telephone dialing system) to provide information about or to help me enroll
       in my requested service. Message and data rates may apply.
      </small>
     </p>
     <button type="submit">Send Request</button>
    </fieldset>
    <div class="success-request-message">
     <h4>Request Sent!</h4>
     <p>Someone will be reaching out soon for more details.</p>
     <button type="button">Ok</button>
    </div>
    <div class="failed-request-message">
     <h4>Oops!</h4>
     <p>We experienced an issue trying to send your request. Try again, or <a href="tel:7744804991">call us</a> directly.</p>
     <button type="submit">Retry</button>
    </div>
    <div class="g-recaptcha"
         data-sitekey="${reCAPTCHA}"
         data-callback="SubmitForm"
         data-size="invisible"></div>
   </form>
  </div>
 </section>
  `
}
