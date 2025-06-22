export default {
  id: "vfc-careers",
  title: "Careers",
  cssSelector: "#careers",
  inputs: [
    {
      type: "text",
      name: "header",
      value: "Careers",
    },
    {
      type: "text",
      name: "disclosure",
      value: "VFC Healthcare Solutions as an equal opportunity employer, does not discriminate on the basis of race, color, religion, sex, national origin, age, disability, or genetic information."
    },
    {
      type: "text",
      name: "headline",
      value: "Join Our Team!"
    },
    {
      type: "list",
      name: "jobPosts",
      label: "Job Posts",
      definitions: [
        {
          type: "group",
          label: "Job Post",
          definitions: [
            {
              type: "text",
              name: "location",
              value: "Boston, MA"
            },
            {
              type: "text",
              name: "headline",
              value: "Certified Nurse Assistant"
            },
            {
              type: "text",
              name: "payment",
              value: "$25 - $35 per hour"
            },
            {
              type: "text",
              name: "benefits",
              value: "Medical + 2 benefits"
            },
            {
              type: "url",
              name: "link",
              value: "https://www.vfchealthcare.com/careers"
            }
          ]
        }
      ]
    }
  ],
  style: ({env}) => ({
    "#careers": {
      marginBottom: "50px",
      header: {
        width: "100%",
        background: "#4b3627",
        h2: {
          fontSize: "2rem",
          background: "var(--vfc-color)",
          color: "#fff",
          margin: 0,
          padding: "10px 20px",
          clear: "both"
        },
        img: {
          width: "100%"
        }
      },
      ".disclosure": {
        maxWidth: "60%",
        margin: "40px 0 30px"
      },
      h3: {
        fontSize: "2.4rem",
        fontWeight: 300
      },
      ".job-posts": {
        display: "flex",
        flexWrap: "wrap",
        gap: "30px"
      },
      ".job-post": {
        background: "#f5f5f5",
        padding: "20px",
        flex: "2 0 400px",
        borderRadius: "5px",
        maxWidth: "calc(50% - 15px)",
        minWidth: "300px",
        h4: {
          fontSize: "1.5rem",
          margin: "0 0 3px"
        },
        ".location": {
          fontSize: "0.8rem",
          background: "#222",
          color: "#fff",
          display: "inline-block",
          padding: "3px 12px",
          borderRadius: "25px",
          fontWeight: 700
        },
        ".payment": {
          marginRight: "10px"
        },
        a: {
          textTransform: "capitalize",
          color: "var(--vfc-highlight-color)",
          display: "flex",
          fontWeight: "bold",
          "&::after": {
            content: "''",
            display: "inline-block",
            width: "20px",
            height: "20px",
            marginLeft: "3px",
            background: `url("${env.assetsOrigin || '/'}assets/icons/ext-link.icon.svg") no-repeat center right`,
            backgroundSize: "18px"
          }
        }
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#careers": {
        ".disclosure": {
          maxWidth: "100%"
        },
        header: {
          padding: 0
        }
      }
    },
    "@media screen and (max-width: 680px)": {
      "#careers": {
        ".job-post": {
          maxWidth: "100%"
        }
      }
    }
  }),
  render: ({env, header, disclosure, jobPosts, headline}) => {
    return `
      <main id="careers">
        <header class="wrapper">
         <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-careers.webp" alt="vfc healthcare solutions careers" loading="lazy">
         <h2>${header}</h2>
        </header>
        <div class="content wrapper">
         <p class="disclosure">${disclosure}</p>
         <h3>${headline}</h3>
         <div class="job-posts">
          ${jobPosts
            .map(({location, headline, payment, benefits, link}) => `
              <div class="job-post">
               <p class="location">${location}</p>
               <h4>${headline}</h4>
               <p>
                <strong class="payment">${payment}</strong>
                <span class="benefits">${benefits}</span>
               </p>
               <a href="${link}" target="_blank">Apply</a>
              </div>
              `)
            .join('')
          }
         </div>
        </div>
      </main>
    `
  }
}
