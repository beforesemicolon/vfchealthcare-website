export default {
  id: "vfc-footer",
  type: "global",
  title: "Footer",
  cssSelector: "footer",
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
  style: ({env}) => ({
    footer: {
      background: "#EBFBFF",
      paddingTop: "60px",
      paddingBottom: "50px",
      ".content": {
        display: "flex",
        justifyContent: "space-between",
        margin: "60px 0"
      },
      address: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        ".fax": {
          margin: "20px 0"
        },
        a: {
          textDecoration: "none",
          color: "#222",
          "&:hover": {
            textDecoration: "underline"
          }
        },
        ".mail-address": {
          span: {
            display: "block"
          }
        }
      },
      section: {
        ul: {
          padding: 0,
          listStyle: "none",
          li: {
            margin: "15px 0",
            a: {
              color: "#222",
              padding: "10px 0"
            }
          }
        }
      },
      "#social": {
        textAlign: "right",
        a: {
          marginLeft: "15px"
        }
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
      }
    },
    "@media screen and (max-width: 960px)": {
      "footer": {
        ".content": {
          gap: "45px",
          flexWrap: "wrap",
          "& > *": {
            minWidth: "250px",
            width: "100%",
            flex: 1
          }
        },
        "#social": {
          textAlign: "left"
        }
      }
    }
  }),
  render: ({env, phone, tollFree, fax, address, services, social, quickLinks, $comp}) => {
    const addressText = address.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const url = new URL('https://maps.apple.com');
    url.searchParams.set('address', addressText);
    
    return `
      <footer class="wrapper">
        ${$comp("vfc-logo")}
        <div class="content">
          <address>
            <a href="tel:${phone.replace(/\D/g, '')}" aria-label="phone number"><strong>Phone</strong>: ${phone}</a>
            <a href="tel:${tollFree.replace(/\D/g, '')}" aria-label="toll-free number"><strong>Toll Free</strong>: ${tollFree}</a>
            <a href="tel:${fax.replace(/\D/g, '')}" aria-label="fax number"><strong>Fax</strong>: ${fax}</a>
            <p><strong>All mail corespondences should be sent to:</strong></p>
            <a class="mail-address" href="${url.href}" aria-label="address on map" target="_blank">
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
            <a href="${social.facebook}" aria-label="facebook page"
               class="facebook-social-black" target="_blank"><span>facebook</span></a>
            <a href="${social.instagram}" aria-label="instagram page"
               class="instagram-social-black" target="_blank"><span>instagram</span></a>
          </section>
        </div>
        <p><small>Copyright © ${(new Date()).getFullYear()} VFC Healthcare Solutions - All Rights Reserved.</small></p>
      </footer>
    `
  }
}
