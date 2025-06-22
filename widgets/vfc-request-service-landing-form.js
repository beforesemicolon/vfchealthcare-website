export default {
  id: "vfc-request-service-landing-form",
  title: "Request service form",
  cssSelector: "#request-service",
  inputs: [
    {
      name: "phrase",
      type: "text",
      value: 'We are your healthcare solution.'
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
              type: 'group',
              definitions: [
                {
                  type: 'text',
                  name: 'label',
                  value: 'Adult Foster/Family care'
                },
                {
                  type: 'text',
                  name: 'value',
                  value: 'adult foster/family care'
                }
              ]
            },
            {
              type: 'group',
              definitions: [
                {
                  type: 'text',
                  name: 'label',
                  value: 'Home care'
                },
                {
                  type: 'text',
                  name: 'value',
                  value: 'home care'
                }
              ]
            },
            {
              type: 'group',
              definitions: [
                {
                  type: 'text',
                  name: 'label',
                  value: 'Nurse Recruiting/Staffing'
                },
                {
                  type: 'text',
                  name: 'value',
                  value: 'nurse staffing'
                }
              ]
            },
            {
              type: 'group',
              definitions: [
                {
                  type: 'text',
                  name: 'label',
                  value: 'Nurse Case Management'
                },
                {
                  type: 'text',
                  name: 'value',
                  value: 'nurse case management'
                }
              ]
            },
            {
              type: 'group',
              definitions: [
                {
                  type: 'text',
                  name: 'label',
                  value: 'Other'
                },
                {
                  type: 'text',
                  name: 'value',
                  value: 'other'
                }
              ]
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
  style: {
    "#request-service": {
      background: "#E5E0DA",
      position: "relative",
      ".hero-image": {
        overflow: "hidden"
      },
      img: {
        transform: "translateX(-50px)"
      },
      ".form-container": {
        color: "#fff",
        position: "relative",
        background: "var(--vfc-color)",
        display: "flex",
        gap: "20px",
        height: "80px",
        paddingTop: "10px",
      },
      h2: {
        fontSize: "34px",
        flex: 1,
        margin: "10px 20px 10px 0",
        textWrap: "nowrap",
      },
      form: {
        background: "#fff",
        color: "#222",
        borderRadius: "3px",
        overflow: "hidden",
        flex: 1,
        marginTop: "-450px",
        marginRight: "5%",
        transform: "translateY(15%)",
        boxShadow: "-3px 6px 10px rgba(0, 0, 0, 0.1)",
        height: "max-content",
        h3: {
          background: "var(--vfc-highlight-color)",
          fontSize: "32px",
          textAlign: "center",
          padding: "20px 0",
          color: "#fff",
          letterSpacing: "0.06rem"
        },
        ".disclosure": {
          fontSize: "14px",
          lineHeight: "110%",
          color: "#666"
        },
        fieldset: {
          padding: "0 25px"
        }
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#request-service": {
        ".hero-image": {
          padding: 0
        },
        img: {
          transform: "none",
          height: "auto !important",
          width: "100%"
        },
        ".form-container": {
          flexDirection: "column",
          height: "auto",
          padding: 0,
          gap: 0
        },
        h2: {
          textAlign: "center",
          whiteSpace: "wrap",
          fontSize: "28px",
          margin: "15px 20px",
          lineHeight: "1.5",
        },
        form: {
          margin: 0,
          transform: "none",
          boxShadow: "none",
          borderRadius: 0,
          h3: {
            background: "none",
            color: "black",
            padding: "25px 25px 25px",
            margin: 0,
            textAlign: "left",
            fontSize: "24px"
          },
        }
      }
    },
    "@media screen and (max-width: 425px)": {
      "#request-service": {
        ".hero-image": {
          height: "60vh",
          position: "relative"
        },
        img: {
          position: "absolute",
          left: "70%",
          top: "50%",
          width: "auto",
          minWidth: "100%",
          minHeight: "100% !important",
          transform: "translate(-50%, -50%)",
          maxWidth: "unset"
        }
      }
    }
  },
  render: ({phrase, env, form} = {}) => {
    const reCAPTCHA = "6Ld2DOYqAAAAAIJRFoIEHsD9ZUgsb1d5lAh823Rr";
    return `
      <section id="request-service">
        <div class="wrapper hero-image">
         <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-warm-care.webp" alt="VFC healthcare solution warm services"
              height="400" loading="lazy">
        </div>
        <div class="wrapper form-container">
         <h2>${phrase}</h2>
         <form id="service-request" class="sending-form">
          <h3>${form.title}</h3>
          <p class="error-check-msg">Please fix the invalid fields before you send.</p>
          <fieldset>
           <legend>Contact Information *</legend>
           <label aria-label="full name"><input type="text" name="fullname" placeholder="${form.labels.name}" required
                                                pattern="^(\\w\\w+)\\s(\\w+)$"
                                                title="Must be full name, for example: John Doe, Jane D"></label>
           <label aria-label="email"><input type="email" name="email" placeholder="${form.labels.email}"></label>
           <label aria-label="phone">
            <input type="tel" name="phone" placeholder="${form.labels.phone}" required>
           </label>
          </fieldset>
          <fieldset>
           <legend>${form.labels.services}</legend>
           <label aria-label="service">
            <select name="service">
              ${form.services.options.map(({
                                                                                                                                                                                                                                                                                                                                                                                                                                                      value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                      label
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }) => `<option value="${value}" ${value === form.services.value ? 'selected' : ''}>${label}</option>`)}
            </select>
           </label>
          </fieldset>
          <fieldset>
           <p class="disclosure">
            <small>${form.disclosure}</small>
           </p>
           <button type="submit">${form.button}</button>
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
}
