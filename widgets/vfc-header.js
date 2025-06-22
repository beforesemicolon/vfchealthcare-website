export default {
  id: "vfc-header",
  title: "Header",
  cssSelector: '#main-header',
  inputs: [
    {
      name: 'menu',
      type: 'list',
      definitions: [
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'Referrals'
            },
            {
              name: 'path',
              type: 'text',
              value: '/referrals',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: true
            },
            {
              name: 'cta',
              type: 'boolean',
              value: true,
              readonly: true
            }
          ]
        },
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'Services'
            },
            {
              name: 'path',
              type: 'text',
              value: '/services',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: true
            }
          ]
        },
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'About Us'
            },
            {
              name: 'path',
              type: 'text',
              value: '/about',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: true
            }
          ]
        },
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'News'
            },
            {
              name: 'path',
              type: 'text',
              value: '/news',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: false
            }
          ]
        },
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'Careers'
            },
            {
              name: 'path',
              type: 'text',
              value: '/careers',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: false
            }
          ]
        },
        {
          type: 'group',
          definitions: [
            {
              name: 'label',
              type: 'text',
              value: 'Contact Us'
            },
            {
              name: 'path',
              type: 'text',
              value: '/contact',
              readonly: true
            },
            {
              name: 'visible',
              type: 'boolean',
              value: true
            }
          ]
        }
      ]
    }
  ],
  style: ({env}) => ({
    "#main-header": {
      position: "sticky",
      top: 0,
      left: 0,
      background: "#fff",
      zIndex: 1000,
      borderBottom: "1px solid #ddd",
      ".branding": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px"
      }
    },
    "#contact-bar": {
      background: "var(--vfc-highlight-color)",
      paddingTop: "6px",
      paddingBottom: "8px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "20px",
      a: {
        color: "#fff",
        fontSize: "1rem",
        textDecoration: "none"
      },
      span: {
        fontWeight: "bold"
      },
      ".primary": {
        paddingLeft: "25px",
        background: `url("${env.assetsOrigin || '/'}assets/icons/phone.icon.svg") no-repeat left center`,
        backgroundSize: "20px"
      },
      "@media screen and (max-width: 520px)": {
        "a:first-of-type": {
          display: "none"
        }
      }
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      ul: {
        display: "flex",
        gap: "15px",
        listStyle: "none",
        margin: 0,
        padding: 0,
        li: {
          a: {
            color: "#222",
            fontWeight: "bold",
            textDecoration: "none",
            textTransform: "capitalize",
            borderBottom: "2px solid transparent",
            padding: "5px 10px",
            transition: "border 0.25s ease",
            "&.primary": {
              background: "var(--vfc-color)",
              color: "#fff",
              borderRadius: "25px",
              borderBottom: "none",
              padding: "5px 15px"
            },
            "&:hover, &[active]": {
              color: "var(--vfc-highlight-color)",
              borderBottom: "2px solid var(--vfc-highlight-color)"
            },
            "&.primary:hover, &.primary[active]": {
              border: "none",
              color: "#fff",
              background: "var(--vfc-highlight-color)"
            }
          }
        }
      }
    },
    "#mobile-menu": {
      display: "none"
    },
    "#mobile-menu-close": {
      display: "none"
    },
    "@media screen and (max-width: 1024px)": {
      nav: {
        display: "none",
        position: "relative",
        "&:target": {
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          right: 0,
          top: 0,
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          height: "100vh",
          width: "100vw",
          animation: "fadeIn 0.3s forwards",
          ul: {
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            background: "#fff",
            width: "300px",
            padding: "25px",
            gap: "40px",
            transform: "translateX(100%)",
            animation: "slideIn 0.2s ease 0.1s forwards",
            li: {
              textAlign: "right",
              a: {
                fontSize: "1.6rem"
              }
            }
          },
          "#mobile-menu-close": {
            position: "absolute",
            bottom: "50px",
            right: "30px",
            width: "30px",
            height: "30px",
            fontSize: "2rem",
            display: "inline-block",
            background: `url("${env.assetsOrigin || '/'}assets/icons/close.icon.svg") no-repeat center center`,
            zIndex: 1,
            opacity: 0,
            animation: "appear 0.3s ease 0.2s forwards",
            "&:hover, &:active": {
              borderBottom: "none"
            }
          }
        }
      },
      "#mobile-menu": {
        display: "block",
        width: "35px",
        height: "16px",
        background: "linear-gradient(to bottom, #222 4px, transparent 0, transparent calc(100% - 4px), #222 0)",
        cursor: "pointer"
      }
    },
    "@keyframes fadeIn": {
      from: { background: "rgba(0, 0, 0, 0)" },
      to: { background: "rgba(0, 0, 0, 0.8)" }
    },
    "@keyframes slideIn": {
      from: { transform: "translateX(100%)" },
      to: { transform: "translate(0)" }
    },
    "@keyframes appear": {
      from: { opacity: 0 },
      to: { opacity: 1 }
    }
  }),
  render: ({menu = {}, env, $comp}) => {
    const navItems = menu
      .filter(item => item.visible)
      .map(item => `<li><a href="${item.path}" class="${item.cta ? 'primary' : ''}" ${env.route === item.path ? 'active' : ''} aria-label="${item.label} page">${item.label}</a></li>`)
      .join('');
    
    return `
      <header id="main-header">
        <div class="branding wrapper">
         ${$comp("vfc-logo")}
         <a href="#menu" id="mobile-menu" role="button" aria-label="open mobile menu"></a>
         <nav id="menu">
          <a href="#" id="mobile-menu-close" role="button" aria-label="close mobile menu"></a>
          <ul>${navItems}</ul>
         </nav>
        </div>
      </header>
    `;
  }
}
