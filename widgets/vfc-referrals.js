export default {
  id: "vfc-referrals",
  cssSelector: "#vfc-referrals",
  name: "Referrals",
  scripts: [
    {
      "src": "https://www.google.com/recaptcha/api.js",
      "async": true,
      "defer": true
    },
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
    "emailjs.init({publicKey: 'df43sDhTtpOjyDM_7',});",
    "handle-form.js",
    "handleForm('referral-form')",
    {
      src: "referral.js",
      defer: true,
    },
  ],
  style: {
    "main": {
      paddingTop: "50px",
      paddingBottom: "50px",
      display: "flex",
      alignItems: "flex-start",
      gap: "50px",
      "& > *": {
        flex: 1,
        maxWidth: "calc(50% - 25px)"
      }
    },
    "#referral-form": {
      minWidth: "50%",
      position: "relative"
    },
    '#who:has(input[name="patient"][value="myself"]:checked) ~ #patient': {
      display: "none"
    },
    ".selected-files": {
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      "&:empty": {
        display: "none"
      },
      li: {
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "2px"
      }
    },
    "@media screen and (max-width: 960px)": {
      "main": {
        flexDirection: "column",
        "& > *": {
          maxWidth: "100%"
        },
        "img": {
          display: "none"
        }
      }
    }
  },
  inputs: [
    {type: "text", name: "errorMessage", value: "Please fix the invalid fields before you send."},
    {type: "text", name: "reCAPTCHA", value: "6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr", description: "Google reCAPTCHA value that is connected to the form template for submission"},
    {type: "text", name: "serviceLegend", value: "Service *"},
    {
      type: "options",
      name: "serviceOptions",
      value: "adult foster/family care",
      definitions: [
        {type: "group", definitions: [{type: "text", name: "label", value: "Adult Foster/Family Care"}, {type: "text", name: "value", value: "adult foster/family care"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Home care"}, {type: "text", name: "value", value: "home care"}]}
      ]
    },
    {type: "text", name: "aboutYouLegend", value: "About you *"},
    {type: "text", name: "fullNamePlaceholder", value: "Full Name *"},
    {type: "text", name: "emailPlaceholder", value: "Email *"},
    {type: "text", name: "phonePlaceholder", value: "Phone Number *"},
    {type: "text", name: "whoNeedsCareLegend", value: "Who needs care?"},
    {
      type: "options",
      name: "patientOptions",
      value: "someone in my care",
      definitions: [
        {type: "group", definitions: [{type: "text", name: "label", value: "Someone in my care"}, {type: "text", name: "value", value: "someone in my care"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "A love one | family"}, {type: "text", name: "value", value: "love one"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Myself"}, {type: "text", name: "value", value: "myself"}]}
      ]
    },
    {type: "text", name: "documentsLegend", value: "Attach Documents"},
    {type: "text", name: "documentsHint", value: "e.g: PCP form, insurance verification."},
    {type: "text", name: "documentsButtonLabel", value: "Select file(s)"},
    {type: "text", name: "patientLegend", value: "About the patient"},
    {type: "text", name: "patientFullNamePlaceholder", value: "Full Name"},
    {type: "text", name: "patientEmailPlaceholder", value: "Email"},
    {type: "text", name: "patientPhonePlaceholder", value: "Phone Number"},
    {type: "text", name: "reasonLegend", value: "Reason for referral?"},
    {
      type: "options",
      name: "reasonOptions",
      value: "medical diagnosis",
      definitions: [
        {type: "group", definitions: [{type: "text", name: "label", value: "Medical diagnosis"}, {type: "text", name: "value", value: "medical diagnosis"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Behavioral"}, {type: "text", name: "value", value: "behavioral"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Other"}, {type: "text", name: "value", value: "other"}]}
      ]
    },
    {type: "text", name: "insuranceLegend", value: "Insurance type *"},
    {
      type: "options",
      name: "insuranceOptions",
      value: "mass-health",
      definitions: [
        {type: "group", definitions: [{type: "text", name: "label", value: "Mass Health"}, {type: "text", name: "value", value: "mass-health"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "SWH"}, {type: "text", name: "value", value: "swh"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "CCA"}, {type: "text", name: "value", value: "cca"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "TUFTS"}, {type: "text", name: "value", value: "tufts"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Fallon"}, {type: "text", name: "value", value: "fallon"}]},
        {type: "group", definitions: [{type: "text", name: "label", value: "Other"}, {type: "text", name: "value", value: "other"}]}
      ]
    },
    {type: "text", name: "additionalInfoLegend", value: "Additional information"},
    {type: "text", name: "successTitle", value: "Request Sent!"},
    {type: "text", name: "successMessage", value: "Someone will be reaching out soon for more details."},
    {type: "text", name: "successButtonLabel", value: "Ok"},
    {type: "text", name: "failedTitle", value: "Oops!"},
    {type: "text", name: "failedMessageBeforeCall", value: "We experienced an issue trying to send your request. Try again, or"},
    {type: "text", name: "callLabel", value: "call us"},
    {type: "text", name: "failedMessageAfterCall", value: "directly."},
    {type: "text", name: "retryButtonLabel", value: "Retry"},
    {type: "text", name: "submitButtonLabel", value: "send"},
    {type: "tel", name: "contactPhone", value: "(774) 480 - 4991"},
    {type: "image", name: "thumbnail", value: "assets/vfc-healthcare-solutions-referral.webp"}
  ],
  render: ({env, errorMessage, reCAPTCHA, serviceLegend, thumbnail, serviceOptions, aboutYouLegend, fullNamePlaceholder, emailPlaceholder, phonePlaceholder, whoNeedsCareLegend, patientOptions, documentsLegend, documentsHint, documentsButtonLabel, patientLegend, patientFullNamePlaceholder, patientEmailPlaceholder, patientPhonePlaceholder, reasonLegend, reasonOptions, insuranceLegend, insuranceOptions, additionalInfoLegend, successTitle, successMessage, successButtonLabel, failedTitle, failedMessageBeforeCall, callLabel, failedMessageAfterCall, retryButtonLabel, submitButtonLabel, contactPhone}) => {
    const contactPhoneNumber = contactPhone.replace(/\D/g, '');
    return `
      <main class="wrapper">
        <form id="referral-form" name="adult-family-care" novalidate recaptcha="${reCAPTCHA}">
         <p class="error-check-msg">${errorMessage}</p>
         <fieldset>
          <legend>${serviceLegend}</legend>
          <label aria-label="service">
           <select name="service">
            ${serviceOptions.options.map(({label, value}) => `<option value="${value}" ${value === serviceOptions.value ? "selected" : ""}>${label}</option>`).join("")}
           </select>
          </label>
         </fieldset>
         <fieldset>
          <legend>${aboutYouLegend}</legend>
          <label aria-label="full name"><input name="fullname" type="text" placeholder="${fullNamePlaceholder}" required pattern="^(\\w\\w+)\\s(\\w+)$" title="Must be full name, for example: John Doe, Jane D"></label>
          <label aria-label="email"><input name="email" type="email" placeholder="${emailPlaceholder}" required></label>
          <label aria-label="phone">
           <input type="tel" name="phone" placeholder="${phonePlaceholder}" required>
          </label>
         </fieldset>
         <fieldset id="who">
          <legend>${whoNeedsCareLegend}</legend>
          <div class="group">
           ${patientOptions.options.map(({label, value}) => `
            <label aria-label="${value}">
             <input type="radio" name="patient" value="${value}" ${value === patientOptions.value ? "checked" : ""}>
             <span>${label}</span>
            </label>
           `).join("")}
          </div>
         </fieldset>
         <fieldset id="documents">
          <legend>${documentsLegend}</legend>
          <p><em>${documentsHint}</em></p>
          <label aria-label="documents" class="btn">
           <span>${documentsButtonLabel}</span>
           <input type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none" multiple>
          </label>
          <ul class="selected-files"></ul>
         </fieldset>
         <fieldset id="patient">
          <legend>${patientLegend}</legend>
          <label aria-label="full name"><input name="patientfullname" type="text" placeholder="${patientFullNamePlaceholder}" pattern="^(\\w\\w+)\\s(\\w+)$" title="Must be full name, for example: John Doe, Jane D"></label>
          <label aria-label="email"><input name="patientemail" type="email" placeholder="${patientEmailPlaceholder}"></label>
          <label aria-label="phone">
           <input type="tel" name="patientphone" placeholder="${patientPhonePlaceholder}">
          </label>
         </fieldset>
         <fieldset>
          <legend>${reasonLegend}</legend>
          <div class="group">
           ${reasonOptions.options.map(({label, value}) => `
            <label aria-label="${value}">
             <input type="radio" name="reason" value="${value}" ${value === reasonOptions.value ? "checked" : ""}>
             <span>${label}</span>
            </label>
           `).join("")}
          </div>
         </fieldset>
         <fieldset>
          <legend>${insuranceLegend}</legend>
          <div class="group">
           ${insuranceOptions.options.map(({label, value}) => `
            <label aria-label="${value}">
             <input type="radio" name="insurance" value="${value}" ${value === insuranceOptions.value ? "checked" : ""}>
             <span>${label}</span>
            </label>
           `).join("")}
          </div>
         </fieldset>
         <fieldset>
          <legend>${additionalInfoLegend}</legend>
          <label aria-label="additional info">
           <textarea name="additionalinfo" cols="30" rows="10"></textarea>
          </label>
         </fieldset>
         <div class="success-request-message">
          <h4>${successTitle}</h4>
          <p>${successMessage}</p>
          <button type="button">${successButtonLabel}</button>
         </div>
         <div class="failed-request-message">
          <h4>${failedTitle}</h4>
          <p>${failedMessageBeforeCall} <a href="tel:${contactPhoneNumber}">${callLabel}</a> ${failedMessageAfterCall}</p>
          <button type="submit">${retryButtonLabel}</button>
         </div>
         <button>${submitButtonLabel}</button>
         ${
      env.prod ?
        `<div class="g-recaptcha"
              data-sitekey="${reCAPTCHA}"
              data-callback="SubmitForm"
              data-size="invisible"></div>` : ''
    }
        </form>
        <img src="${env.assetsOrigin || '/'}${thumbnail}" alt="vfc healthcare solutions referral" loading="lazy">
       </main>
     `
  }
}
