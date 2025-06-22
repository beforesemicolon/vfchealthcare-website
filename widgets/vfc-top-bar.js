export default {
  id: "vfc-top-bar",
  title: "Top bar",
  inputs: [
    {
      name: "phone",
      type: "tel",
      value: '(774) 480 - 4991'
    },
    {
      name: "fax",
      type: "tel",
      value: '(774) 272 - 9322'
    },
    {
      name: "facebook",
      type: "url",
      value: 'https://www.facebook.com/people/VFC-Healthcare-Solutions/100086915456939/'
    },
    {
      name: "instagram",
      type: "url",
      value: 'https://www.instagram.com/vfchealthcaresolutions/?igshid=YmMyMTA2M2Y%3D'
    }
  ],
  style: ({env}) => ({
    "#contact-bar": {
      background: "var(--vfc-highlight-color)",
      paddingTop: "6px",
      paddingBottom: "8px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "20px",
      "a": {
        color: "#fff",
        fontSize: "1rem",
        textDecoration: "none"
      },
      "span": {
        fontWeight: "bold"
      },
      ".primary": {
        paddingLeft: "25px",
        background: `url("${env.assetsOrigin || '/'}assets/icons/phone.icon.svg") no-repeat left center`,
        backgroundSize: "20px"
      }
    },
    "@media screen and (max-width: 520px)": {
      "#contact-bar": {
        "a:first-of-type": {
          display: "none"
        }
      }
    }
  }),
  render: (props = {}) => {
    const phoneNumber = (props.phone ?? '').trim().replace(/[^\d]/g, '');
    const faxNumber = (props.fax ?? '').trim().replace(/[^\d]/g, '');
    
    return `
      <div id="contact-bar" class="wrapper">
       ${faxNumber ? `<a href="tel:${faxNumber}" aria-label="fax number">Fax: <span>${props.fax}</span></a>` : ''}
       ${phoneNumber ? `<a href="tel:${phoneNumber}" aria-label="phone number">Phone: <span>${props.phone}</span></a>` : ''}
       ${props.facebook ? `<a href="${props.facebook}" class="facebook-social" aria-label="facebook page" target="_blank"><span>Facebook</span></a>` : ''}
       ${props.instagram ? `<a href="${props.instagram}" class="instagram-social" aria-label="instagram page" target="_blank"><span>Instagram</span></a>` : ''}
      </div>
    `
  }
}
