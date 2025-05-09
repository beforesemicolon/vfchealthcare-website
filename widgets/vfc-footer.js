export default {
   id: "vfc-footer",
   title: "Footer",
  inputs: [
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
      type: "list",
      name: "services",
      definitions: [
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Adult Foster/Family Care"
            },
            {
              name: "link",
              type: "text",
              value: "/services#adult-family-care"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Home care"
            },
            {
              name: "link",
              type: "text",
              value: "/services#homecare"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Nurse Recruiting/Staffing"
            },
            {
              name: "link",
              type: "text",
              value: "/services#nurse-recruiting-staffing"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Nurse Case Management"
            },
            {
              name: "link",
              type: "text",
              value: "/services#nurse-case-management"
            },
          ]
        }
      ]
    },
    {
      type: "list",
      name: "quickLinks",
      label: "Quick Links",
      definitions: [
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Referrals"
            },
            {
              name: "link",
              type: "text",
              value: "/referrals"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "News"
            },
            {
              name: "link",
              type: "text",
              value: "/news"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Careers"
            },
            {
              name: "link",
              type: "text",
              value: "/careers"
            },
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "label",
              type: "text",
              value: "Caregiver Portal"
            },
            {
              name: "link",
              type: "text",
              value: "https://generations.idb-sys.com/Views/loginnew.aspx?ReturnUrl=%2f"
            },
          ]
        }
      ]
    },
    {
      type: "group",
      name: "social",
      definitions: [
        {
          name: "facebook",
          type: "url",
          value: "https://www.facebook.com/people/VFC-Healthcare-Solutions/100086915456939/"
        },
        {
          name: "instagram",
          type: "url",
          value: "https://www.instagram.com/vfchealthcaresolutions/?igshid=YmMyMTA2M2Y%3D"
        }
      ]
    }
  ],
  style: `
footer {
 background: #EBFBFF;
 padding-top: 35px;
 padding-bottom: 25px;
}

footer .content {
 display: flex;
 justify-content: space-between;
 margin: 40px 0;
}

footer address {
 display: flex;
 flex-direction: column;
 gap: 5px;
}

footer address .fax {
 margin: 20px 0;
}

footer address a {
 text-decoration: none;
 color: #222;
}

footer address a:hover {
 text-decoration: underline;
}

footer address .mail-address span {
 display: block;
}

footer section ul {
 padding: 0;
 list-style: none;
}

footer section ul li {
 margin: 15px 0;
}

footer section ul li a {
 color: #222;
 padding: 10px 0;
}

footer #social {
 text-align: right;
}

footer #social a {
 margin-left: 15px;
}

@media screen and (max-width: 960px) {
 footer .content {
  gap: 45px;
  flex-wrap: wrap;
 }
 
 footer .content > * {
  min-width: 250px;
  width: 100%;
  flex: 1;
 }
 
 footer #social {
  text-align: left;
 }
}
`,
  render: ({env, phone, tollFree, fax, address, services, social, quickLinks}) => {
    const addressText = address.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const url = new URL('https://maps.apple.com');
    url.searchParams.set('address', addressText);
    
     return `
<footer class="wrapper">
  <a href="/" class="logo">
   <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-logo.svg" alt="vfc healthcare solutions logo" width="45" height="45">
   <div class="details">
    <h1>VFC Healthcare Solutions</h1>
    <p><em>Veracity. Fidelity. Compassion</em></p>
   </div>
  </a>
  <div class="content">
  <address>
    <a href="tel:${phone.replace(/\D/g, '')}"><strong>Phone</strong>: ${phone}</a>
    <a href="tel:${tollFree.replace(/\D/g, '')}"><strong>Tol Free</strong>: ${tollFree}</a>
    <a href="tel:${fax.replace(/\D/g, '')}"><strong>Fax</strong>: ${fax}</a>
    <p><strong>All mail corespondences should be sent to:</strong></p>
    <a class="mail-address" href="${url.href}">
     ${address}
    </a>
   </address>
   <section id="footer-services">
    <h4>Services:</h4>
    <ul>${services.map((service) => `<li><a href="${service.link}">${service.label}</a></li>`).join('')}</ul>
   </section>
   <section id="quick-links">
    <h4>Quick Links:</h4>
    <ul>${quickLinks.map((ql) => `<li><a href="${ql.link}">${ql.label}</a></li>`).join('')}</ul>
   </section>
   <section id="social">
    <h4>Follow Us:</h4>
    <a href="${social.facebook}"
       class="facebook-social-black"><span>facebook</span></a>
    <a href="${social.instagram}"
       class="instagram-social-black"><span>instagram</span></a>
   </section>
  </div>
  <p><small>Copyright © ${(new Date()).getFullYear()} VFC Healthcare Solutions - All Rights Reserved.</small></p>
</footer>
  `
  }
}
