export default {
  id: "vfc-about-us",
  cssSelector: "#vfc-about-us",
  name: "About us",
  style: {
    section: {
      display: "flex",
      flexDirection: "column",
      margin: "60px 0",
      "& > *": {
        width: "calc(50% - 30px)"
      },
    },
    "@media screen and (max-width: 1024px)": {
      "section > *": {
        width: "100%"
      }
    }
  },
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
  render: ({header, description}) => {
    return `
      <section class="wrapper">
       <h2>${header}</h2>
       <p>${description}</p>
      </section>
  `
  }
}
