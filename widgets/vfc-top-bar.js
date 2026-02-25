export default {
  id: "vfc-top-bar",
  cssSelector: "#vfc-top-bar",
  name: "Top bar",
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
    },
    {
      name: "phoneLabel",
      type: "text",
      value: "Phone"
    },
    {
      name: "faxLabel",
      type: "text",
      value: "Fax"
    },
    {
      name: "facebookLabel",
      type: "text",
      value: "Facebook"
    },
    {
      name: "instagramLabel",
      type: "text",
      value: "Instagram"
    }
  ],
  style: ({env}) => ({
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
    },
    ".facebook-social": {
      background: `url("${env.assetsOrigin || '/'}assets/icons/facebook.icon.svg") 0 0 no-repeat`
    },
    ".instagram-social": {
      background: `url("${env.assetsOrigin || '/'}assets/icons/instagram.icon.svg") 0 0 no-repeat`
    },
    ".facebook-social-black": {
      background: `url("${env.assetsOrigin || '/'}assets/icons/facebook-black.icon.svg") 0 0 no-repeat`
    },
    ".instagram-social-black": {
      background: `url("${env.assetsOrigin || '/'}assets/icons/instagram-black.icon.svg") 0 0 no-repeat`
    },
    "@media screen and (max-width: 520px)": {
      "a:first-of-type": {
        display: "none"
      }
    }
  }),
  render: (props = {}) => {
    const phoneNumber = (props.phone ?? '').trim().replace(/[^\d]/g, '');
    const faxNumber = (props.fax ?? '').trim().replace(/[^\d]/g, '');
    
    return `
      <div class="wrapper row">
       ${faxNumber ? `<a href="tel:${faxNumber}" aria-label="fax number">${props.faxLabel}: <span>${props.fax}</span></a>` : ''}
       ${phoneNumber ? `<a href="tel:${phoneNumber}" aria-label="phone number">${props.phoneLabel}: <span>${props.phone}</span></a>` : ''}
       ${props.facebook ? `<a href="${props.facebook}" class="facebook-social" aria-label="facebook page" target="_blank"><span>${props.facebookLabel}</span></a>` : ''}
       ${props.instagram ? `<a href="${props.instagram}" class="instagram-social" aria-label="instagram page" target="_blank"><span>${props.instagramLabel}</span></a>` : ''}
      </div>
    `
  }
}
