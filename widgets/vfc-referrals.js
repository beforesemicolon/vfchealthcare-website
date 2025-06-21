export default {
  id: "vfc-referrals",
  title: "Referrals",
  cssSelector: "#referrals",
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
    "#referrals": {
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
      "#referrals": {
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
  render: ({env}) => {
    const reCAPTCHA = "6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr";
    return `
      <main class="wrapper" id="referrals">
        <form id="referral-form" name="adult-family-care" novalidate recaptcha="${reCAPTCHA}">
         <p class="error-check-msg">Please fix the invalid fields before you send.</p>
         <fieldset>
          <legend>Service *</legend>
          <label aria-label="service">
           <select name="service">
            <option value="adult foster/family care" selected>Adult Foster/Family Care</option>
            <option value="home care">Home care</option>
           </select>
          </label>
         </fieldset>
         <fieldset>
          <legend>About you *</legend>
          <label aria-label="full name"><input name="fullname" type="text" placeholder="Full Name *" required pattern="^(\\w\\w+)\\s(\\w+)$" title="Must be full name, for example: John Doe, Jane D"></label>
          <label aria-label="email"><input name="email" type="email" placeholder="Email *" required></label>
          <label aria-label="phone">
           <input type="tel" name="phone" placeholder="Phone Number *" required>
          </label>
         </fieldset>
         <fieldset id="who">
          <legend>Who needs care?</legend>
          <div class="group">
           <label aria-label="someone in my care">
            <input type="radio" name="patient" value="someone in my care" checked>
            <span>Someone in my care</span>
           </label>
           <label aria-label="love one">
            <input type="radio" name="patient" value="love one">
            <span>A love one | family</span>
           </label>
           <label aria-label="myself">
            <input type="radio" name="patient" value="myself">
            <span>Myself</span>
           </label>
          </div>
         </fieldset>
         <fieldset id="documents">
          <legend>Attach Documents</legend>
          <p><em>e.g: PCP form, insurance verification.</em></p>
          <label aria-label="documents" class="btn">
           <span>Select file(s)</span>
           <input type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none" multiple>
          </label>
          <ul class="selected-files"></ul>
         </fieldset>
         <fieldset id="patient">
          <legend>About the patient</legend>
          <label aria-label="full name"><input name="patientfullname" type="text" placeholder="Full Name" pattern="^(\\w\\w+)\\s(\\w+)$" title="Must be full name, for example: John Doe, Jane D"></label>
          <label aria-label="email"><input name="patientemail" type="email" placeholder="Email"></label>
          <label aria-label="phone">
           <input type="tel" name="patientphone" placeholder="Phone Number">
          </label>
         </fieldset>
         <fieldset>
          <legend>Reason for referral?</legend>
          <div class="group">
           <label aria-label="medical diagnosis">
            <input type="radio" name="reason" value="medical diagnosis" checked>
            <span>Medical diagnosis</span>
           </label>
           <label aria-label="behavioral">
            <input type="radio" name="reason" value="behavioral">
            <span>Behavioral</span>
           </label>
           <label aria-label="other">
            <input type="radio" name="reason" value="other">
            <span>Other</span>
           </label>
          </div>
         </fieldset>
         <fieldset>
          <legend>Insurance type *</legend>
          <div class="group">
           <label aria-label="mass health">
            <input type="radio" name="insurance" value="mass-health" checked>
            <span>Mass Health</span>
           </label>
           <label aria-label="swh">
            <input type="radio" name="insurance" value="swh">
            <span>SWH</span>
           </label>
           <label aria-label="cca">
            <input type="radio" name="insurance" value="cca">
            <span>CCA</span>
           </label>
           <label aria-label="tufts">
            <input type="radio" name="insurance" value="tufts">
            <span>TUFTS</span>
           </label>
           <label aria-label="fallon">
            <input type="radio" name="insurance" value="fallon">
            <span>Fallon</span>
           </label>
           <label aria-label="other">
            <input type="radio" name="insurance" value="other">
            <span>Other</span>
           </label>
          </div>
         </fieldset>
         <fieldset>
          <legend>Additional information</legend>
          <label aria-label="additional info">
           <textarea name="additionalinfo" cols="30" rows="10"></textarea>
          </label>
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
         <button>send</button>
         ${
      env.prod ?
        `<div class="g-recaptcha"
              data-sitekey="${reCAPTCHA}"
              data-callback="SubmitForm"
              data-size="invisible"></div>` : ''
    }
        </form>
        <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-referral.jpg" alt="vfc healthcare solutions referral">
       </main>
     `
  }
}
