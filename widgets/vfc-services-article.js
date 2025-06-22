export default {
  id: "vfc-services-article",
  title: "Services article",
  cssSelector: "#services",
  inputs: [
    {
      name: "section1",
      type: "html",
      value: `
      <h3 id="adult-family-care">Adult Foster/Family Care</h3>
    <p>Our Adult Foster Care (AFC) services provide a compassionate and personalized alternative to Nursing Home or
       Assisted Living placement for qualified clients. This program empowers individuals to remain in the
       familiarity
       and comfort of their homes while receiving the care and support they need.
    </p>
    <p><strong><em>Why choose Adult Family Care?</em></strong></p>
    <ul>
     <li><strong>Familiar home environment</strong>: Our Adult Family Care members continue to reside in the
                                                   comfort
                                                   of their own homes or family members’ homes.
     </li>
     <li>
      <strong>Financial Support for Caregivers</strong>: Our caregivers receive tax-free payments to help decrease
                                                       the financial burdens often associated with caregiving.
     </li>
     <li>
      <strong>Dedicated Care Team</strong>: Our nurses and case managers conduct regular home visits to provide
                                          support and resources to caregivers and members receiving care.
     </li>
     <li><strong>24-Hour Support</strong>: Our Adult Family Care members and caregivers receive 24-hour support
                                         from
                                         our staff for guidance and safety.
     </li>
    </ul>
      `
    },
    {
      name: "section2",
      type: "html",
      value: `
      <h3 id="homecare">Homecare Services</h3>
    <p>At VFC, we understand the challenges many individuals face when deciding to stay in the place they cherish
       most
       – their home.</p>
    <p>Our mission is to uphold the dignity, comfort, and safety of our clients by providing skilled nursing and
       non-skilled services tailored to their needs. We work closely with clients, their families, and case managers
       to ensure seamless coordination of care, enabling individuals to remain at home with confidence and peace of
       mind.</p>
    <p>Our comprehensive services include:</p>
    <ul>
     <li><strong>Homemaking</strong>: Assisting with household tasks to create a safe and comfortable living
                                    environment.
     </li>
     <li><strong>Home Health Aides</strong>: Providing hands-on assistance with daily living activities.</li>
     <li><strong>Personal Care</strong>: Helping clients maintain personal hygiene and self-care routines.</li>
     <li><strong>Supportive Home care Aides</strong>: Offering additional support to meet specific needs.</li>
     <li><strong>Companionship</strong>: Reducing loneliness and enhancing emotional well-being through friendly
                                       interactions.
     </li>
     <li><strong>Private Duty Nursing</strong>: Delivering one-on-one skilled nursing care tailored to medical
                                              requirements.
     </li>
    </ul>
    <p>With VFC, you can trust that your loved ones will receive compassionate, high-quality care, ensuring their
       well-being and independence at home.</p>`
    },
    {
      name: "section3",
      type: "html",
      value: `
      <h3 id="nurse-recruiting-staffing">Nurse Recruiting/Staffing</h3>
    <p>VFC provides both short-term and long-term staffing solutions, screening and placing highly skilled,
       experienced nurses and advanced practice clinicians who are ready to work from day one. Each nurse is
       carefully
       vetted to ensure a strong match with your facility, promoting retention and delivering excellent care.</p>
    <h3 id="nurse-case-management">Nurse Case Management</h3>
    <p>Our staff of seasoned nurses with vast experience in case management provide education to clients about their
       disease management and act as liaisons between clients, their providers, and the health insurance companies.
       As
       clients navigate the often complicated health care system, our nurses support them in their choice of
       treatment
       and link them to resources available in their community. </p>`
    }
  ],
  style: {
    "#services": {
      "--header-bg": "#7196a8",
      "--section-gap": "80px",
      "> *": {
        width: "calc(50% - 30px)"
      },
      "p": {
        lineHeight: "165%"
      },
      "header": {
        width: "100%",
        background: "linear-gradient(90deg, var(--header-bg) 60%, #d2dce4 0) no-repeat 0 0",
        marginBottom: "50px",
        "img": {
          float: "right",
          background: "var(--header-bg)",
          maxHeight: "300px"
        },
        "h2": {
          fontSize: "2rem",
          background: "var(--vfc-color)",
          color: "#fff",
          margin: 0,
          padding: "10px 20px",
          clear: "both"
        }
      },
      "main": {
        display: "flex",
        flexWrap: "wrap",
        gap: "60px var(--section-gap)",
        width: "100%",
        paddingTop: "35px",
        paddingBottom: "35px",
        justifyContent: "space-between",
        "> *": {
          width: "calc(50% - var(--section-gap))"
        },
        "section:nth-of-type(odd)": {
          position: "relative",
          "::after": {
            content: "''",
            display: "inline-block",
            width: "1px",
            height: "70%",
            position: "absolute",
            right: "calc(var(--section-gap) * -1)",
            top: "50%",
            transform: "translateY(-50%)",
            background: "var(--vfc-color)"
          }
        }
      },
      "h3": {
        fontSize: "2.8rem",
        fontWeight: 300,
        marginBottom: "20px"
      },
      "ul": {
        margin: "20px 0"
      },
      "li": {
        margin: "15px 0",
        lineHeight: "165%"
      },
      ".btn": {
        marginTop: "40px"
      },
      ".call-us-btn": {
        background: "var(--vfc-color)",
        color: "#fff",
        padding: "10px 25px",
        textDecoration: "none",
        borderRadius: "20px",
        fontWeight: "bold",
        marginTop: "40px",
        display: "inline-block"
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#services": {
        "main": {
          gap: "30px",
          "> *": {
            width: "auto",
            maxWidth: "100%",
            minWidth: "425px"
          },
          "section:nth-of-type(odd)": {
            "::after": {
              display: "none"
            }
          }
        }
      }
    },
    "@media screen and (max-width: 520px)": {
      "#services": {
        "header": {
          padding: 0,
          "img": {
            float: "none"
          }
        },
        "h3": {
          fontSize: "2rem"
        }
      }
    },
    "@media screen and (max-width: 435px)": {
      "#services": {
        "main": {
          "> *": {
            minWidth: "200px"
          }
        }
      }
    }
  },
  render: ({env, section1, section2, section3}) => {
    return `
      <article id="services">
        <header class="wrapper">
         <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-service.webp" alt="vfc healthcare solutions services" loading="lazy">
         <h2>Services</h2>
        </header>
        <main class="wrapper">
         <section>
          ${section1}
          <a href="/referrals" class="btn">Request Service</a>
         </section>
         <section>
          ${section2}
         </section>
         <section>
          ${section3}
          <a href="tel:7744804991" class="call-us-btn">Call us: (774) 480 - 4991</a>
         </section>
         <img src="${env.assetsOrigin || '/'}assets/nurse-force.webp" alt="vfc nurses" loading="lazy">
        </main>
      </article>
    `
  }
}
