export default {
   id: "vfc-referrals",
   title: "Referrals",
  inputs: [
    {
      name: "reCAPTCHA",
      label: "reCAPTCHA site key",
      type: "text",
      value: '6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr'
    },
  ],
  style: `
main {
 padding-top: 50px;
 padding-bottom: 50px;
 display: flex;
 align-items: flex-start;
 gap: 50px;
}

main > * {
 flex: 1;
 max-width: calc(50% - 25px);
}

#referral {
 min-width: 50%;
 position: relative;
}

#who:has(input[value="myself"]:focus) ~ #patient {
 display: none;
}

.selected-files:empty {
 display: none;
}

.selected-files {
 list-style: none;
 padding: 0;
 display: flex;
 flex-direction: column;
 gap: 10px;
}

.selected-files li {
 color: #fff;
 padding: 10px 14px;
 border-radius: 2px;
}

@media screen and (max-width: 960px) {
 main {
  flex-direction: column;
 }
 
 main > * {
  max-width: 100%;
 }
 
 main img {
  display: none;
 }
}

`,
  render: ({env, reCAPTCHA}) => `
<main class="wrapper">
  <form id="referral" name="adult-family-care" novalidate>
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
   <div class="g-recaptcha"
        data-sitekey="${reCAPTCHA}"
        data-callback="SubmitForm"
        data-size="invisible"></div>
  </form>
  <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-referral.jpg" alt="vfc healthcare solutions referral">
 </main>
  `
}
