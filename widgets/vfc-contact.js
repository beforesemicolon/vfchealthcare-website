export default {
  id: "vfc-contact",
  cssSelector: "#vfc-contact",
  name: "Contact",
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
      name: "phoneLabel",
      type: "text",
      value: "Phone"
    },
    {
      name: "tollFreeLabel",
      type: "text",
      value: "Toll Free"
    },
    {
      name: "faxLabel",
      type: "text",
      value: "Fax"
    },
    {
      name: "addressLabel",
      type: "text",
      value: "All mail correspondences should be sent to:"
    },
    {
      name: "address",
      type: "html",
      value: "<span>348 N Pearl St,</span><span>Brockton,</span><span>MA. 02301</span>"
    },
    {
      type: "html",
      name: "googleMapEmbed",
      value: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8456.951590788418!2d-71.07228120702712!3d42.10064877724718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e484441c4f3bdf%3A0xb6645e298dc7d16c!2s348%20N%20Pearl%20St%2C%20Brockton%2C%20MA%2002301!5e1!3m2!1sen!2sus!4v1770488982585!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    }
  ],
  render: ({email, description, header, phone, tollFree, fax, phoneLabel, tollFreeLabel, faxLabel, addressLabel, address, googleMapEmbed, contactForm}) => {
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
          <a href="tel:${phone.replace(/\D/g, '')}"><strong>${phoneLabel}</strong>: ${phone}</a>
          <a href="tel:${tollFree.replace(/\D/g, '')}"><strong>${tollFreeLabel}</strong>: ${tollFree}</a>
          <a href="tel:${fax.replace(/\D/g, '')}"><strong>${faxLabel}</strong>: ${fax}</a>
          <p><strong>${addressLabel}</strong></p>
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
