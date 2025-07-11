export default {
  id: "vfc-contact",
  type: "local",
  title: "Contact",
  inputs: [
    {
      name: "header",
      type: "text",
      value: "Call or mail us!"
    },
    {
      name: "description",
      type: "textarea",
      value: "Please contact us directly with any questions, concerns or inquiries you may have. You can use the following email:"
    },
    {
      name: "contactForm",
      type: "url",
      value: "https://us8.list-manage.com/contact-form?u=18f1d06a6f0fb92a4f12b437c&form_id=8476f8e660d5b2ea98ede0b3da06e4ef"
    },
    {
      name: "email",
      type: "email",
      value: "info@vfchealthcare.com"
    },
    {
      name: "phone",
      type: "tel",
      value: "(774) 480 - 4991"
    },
    {
      name: "tollFree",
      label: "Toll Free",
      type: "tel",
      value: "(888) 718 - 4683"
    },
    {
      name: "fax",
      type: "tel",
      value: "(774) 272 - 9322"
    },
    {
      name: "address",
      type: "html",
      value: "<span>810 Washington Street,</span><span>Stoughton,</span><span>MA. 02072</span>"
    },
    {
      type: "html",
      name: "googleMapEmbed",
      value: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.2395241517434!2d-71.10390752332923!3d42.12375524999702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e486a8e3b9af09%3A0x7b36201e6ea70532!2s810%20Washington%20St%2C%20Stoughton%2C%20MA%2002072!5e0!3m2!1sen!2sus!4v1740178375145!5m2!1sen!2sus\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    }
  ],
  style: {
    main: {
      display: "flex",
      flexWrap: "wrap",
      paddingBottom: "50px",
      "& > *": {
        flex: "1 0 max(400px, 50%)"
      }
    },
    "#contact-container": {
      overflow: "hidden",
      position: "relative",
      height: "1000px",
      iframe: {
        width: "100%",
        height: "100%",
        border: "none"
      },
      ".inner-box": {
        height: "2000px",
        position: "absolute",
        width: "100%",
        top: "-50px"
      }
    },
    "#contact-details": {
      paddingTop: "70px",
      address: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
        a: {
          display: "block",
          color: "#333"
        },
        p: {
          margin: "40px 0 10px"
        }
      },
      a: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      },
      ".mail-address": {
        marginBottom: "40px",
        display: "inline-block",
        span: {
          display: "block",
          margin: "2px 0"
        }
      },
      iframe: {
        maxWidth: "600px",
        width: "100%",
        height: "300px"
      },
      h2: {
        fontWeight: 500,
        fontSize: "2rem",
        marginBottom: "10px"
      },
    },
    "@media screen and (max-width: 520px)": {
      main: {
        "& > *": {
          flex: "1 0 100%"
        }
      }
    }
  },
  render: ({email, description, header, phone, tollFree, fax, address, googleMapEmbed, contactForm}) => {
    const addressText = address.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const url = new URL('https://maps.apple.com');
    url.searchParams.set('address', addressText);
    
    return `
      <main class="wrapper">
        <div id="contact-container">
         <div class="inner-box">
          <iframe id="contact-form" src="${contactForm}"></iframe>
         </div>
        </div>
        <section id="contact-details">
         <h2>${header}</h2>
         <p>${description} <a href="mailto:${email}">${email}</a></p>
         <address>
          <a href="tel:${phone.replace(/\D/g, '')}"><strong>Phone</strong>: ${phone}</a>
          <a href="tel:${tollFree.replace(/\D/g, '')}"><strong>Toll Free</strong>: ${tollFree}</a>
          <a href="tel:${fax.replace(/\D/g, '')}"><strong>Fax</strong>: ${fax}</a>
          <p><strong>All mail corespondences should be sent to:</strong></p>
          <a class="mail-address" href="${url.href}" target="_blank">
           ${address}
          </a>
         </address>
         ${googleMapEmbed}
        </section>
      </main>
    `
  }
}
