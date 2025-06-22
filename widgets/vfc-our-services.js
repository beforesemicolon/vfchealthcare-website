export default {
  id: "vfc-our-services",
  title: "Our services",
  cssSelector: "#services",
  inputs: [
    {
      type: "text",
      name: "header",
      value: "Our Services"
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
      type: "text",
      name: "action",
      value: "Learn More"
    }
  ],
  style: {
    "#services": {
      background: "linear-gradient(90deg, var(--vfc-color) 50%, transparent 0) no-repeat 0 var(--gap-size)," +
        "linear-gradient(90deg, transparent 50%, #d2dce4 0) no-repeat 0 calc(var(--gap-size) * -1)",
      zIndex: 1,
      position: "relative",
      overflow: "hidden",
      h2: {
        fontSize: "2rem",
        margin: "0 0 0.5rem",
        transform: "translateY(-15px)",
        position: "relative",
        top: "12px"
      },
      ".content": {
        display: "flex",
        alignItems: "center",
        height: "345px",
        "> *": {
          flex: 1,
          maxWidth: "50%"
        },
        "img": {
          transform: "translateY(calc(var(--gap-size) * -1))",
          background: "#abb4c0",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left"
        },
        ".details": {
          color: "#fff",
          position: "relative",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            width: "var(--gap-size)",
            height: "var(--gap-size)",
            background: "#222",
            position: "absolute",
            right: "calc(var(--gap-size) * -1)",
            bottom: 0,
            backgroundImage: "linear-gradient(45deg, var(--vfc-color) 50%, color-mix(in srgb, var(--vfc-color) 70%, black 30%) 0)"
          },
          "ul": {
            minWidth: "100%",
            margin: "30px 0",
            paddingLeft: "20px"
          },
          "li": {
            margin: "15px 0",
            "&::marker": {
              fontSize: "1.4em"
            }
          },
          "a": {
            color: "#fff",
            textDecoration: "none",
            "&:not(.btn)": {
              fontSize: "28px",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "8px"
              }
            }
          },
          ".btn": {
            background: "#fff",
            color: "#222",
            marginBottom: "20px"
          }
        }
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#services": {
        background: "none",
        padding: 0,
        h2: {
          transform: "none",
          padding: "0 25px",
          marginBottom: "25px"
        },
        ".content": {
          color: "#222",
          display: "flex",
          alignItems: "flex-start",
          background: "#abb4c0",
          paddingLeft: "25px",
          overflow: "hidden",
          "> *": {
            maxWidth: "100%",
            transform: "none"
          },
          "img": {
            transform: "none",
            height: "100%",
            minWidth: "60%"
          },
          ".details": {
            minWidth: "40%",
            "&::after": {
              display: "none"
            },
            "ul a": {
              color: "#222",
              fontSize: "1.6rem"
            },
            ".btn": {
              margin: "5px 0 20px"
            }
          }
        }
      }
    },
    "@media screen and (max-width: 960px)": {
      "#services": {
        ".content": {
          flexDirection: "column-reverse",
          padding: 0,
          height: "auto",
          ".details": {
            width: "100%",
            background: "#fff",
            paddingLeft: "25px",
            color: "#222",
            ".btn": {
              background: "#222",
              color: "#fff"
            }
          },
          "img": {
            maxHeight: "300px",
            width: "auto",
            alignSelf: "flex-end",
            minWidth: "unset"
          }
        }
      }
    }
  },
  render: ({env, services, action, header}) => {
    return `
      <section id="services" class="wrapper">
       <h2>${header}</h2>
       <div class="content">
        <div class="details">
          <ul>${services.map((service) => `<li><a href="${service.link}">${service.label}</a></li>`).join('')}</ul>
         <a href="/services" class="btn">${action}</a>
        </div>
        <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-service.webp" alt="VFC healthcare solutions services">
       </div>
      </section>
    `
  }
}
