export default {
  id: "vfc-top-bar",
  title: "Top bar",
  inputs: [
    {
      name: "phone",
      type: "string",
      value: '(774) 272 - 9322'
    },
    {
      name: "fax",
      type: "string",
      value: '(774) 480 - 4991'
    },
    {
      name: "facebook",
      type: "string",
      value: 'https://www.facebook.com/people/VFC-Healthcare-Solutions/100086915456939/'
    },
    {
      name: "instagram",
      type: "string",
      value: 'https://www.instagram.com/vfchealthcaresolutions/?igshid=YmMyMTA2M2Y%3D'
    }
  ],
  style: `
#contact-bar {
 background: var(--vfc-highlight-color);
 padding-top: 6px;
 padding-bottom: 8px;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 gap: 20px;
}

#contact-bar a {
 color: #fff;
 font-size: 1rem;
 text-decoration: none;
}

#contact-bar span {
 font-weight: bold;
}

#contact-bar .primary {
 padding-left: 25px;
 background: url("./assets/icons/phone.icon.svg") no-repeat left center;
 background-size: 20px;
}

@media screen and (max-width: 520px) {
 #contact-bar a:first-of-type {
  display: none;
 }
}
`,
  render: (props = {}) => {
    const phoneNumber = (props.phone ?? '').trim().replace(/[^\d]/g, '');
    const faxNumber = (props.fax ?? '').trim().replace(/[^\d]/g, '');
    
    return `
<div id="contact-bar" class="wrapper">
 ${faxNumber ? `<a href="tel:${faxNumber}">Fax: <span>${props.fax}</span></a>` : ''}
 ${phoneNumber ? `<a href="tel:${phoneNumber}">Phone: <span>${props.phone}</span></a>` : ''}
 ${props.facebook ? `<a href="${props.facebook}" class="facebook-social"><span>Facebook</span></a>` : ''}
 ${props.instagram ? `<a href="${props.instagram}" class="instagram-social"><span>Instagram</span></a>` : ''}
</div>
  `
  }
}
