export default {
  id: "vfc-about-us",
  cssSelector: "#about-us",
  title: "About us",
  inputs: [
    {
      type: "text",
      name: "header",
      value: "Welcome to VFC"
    },
    {
      type: "textarea",
      name: "description",
      value: "VFC Healthcare Solutions mission is to provide high quality, person-centered services to our members to help them age in place and remain in their community of choice. Our goal is to improve access to care and community resources through, education, advocacy, and partnership with other stakeholders."
    }
  ],
  style: {
    "#about-us": {
      display: "flex",
      flexDirection: "column",
      margin: "40px 0 60px",
      "& > *": {
        width: "calc(50% - 30px)"
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#about-us > *": {
        width: "100%"
      }
    }
  },
  render: ({header, description, env}) => {
    return `
      <section id="about-us" class="wrapper">
       <h2>${header}</h2>
       <p>${description}</p>
      </section>
  `
  }
}
