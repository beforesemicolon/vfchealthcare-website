export default {
  id: "vfc-credibility",
  name: "Credibility",
  cssSelector: "#vfc-credibility",
  style: {
    ".wrapper": {
      display: "flex",
      gap: "25px",
      alignItems: "center",
      paddingTop: "25px",
      paddingBottom: "15px",
    },
    p: {
      maxWidth: "60%"
    },
    "@media screen and (max-width: 1024px)": {
      p: {
        maxWidth: "100%"
      }
    },
    "@media screen and (max-width: 425px)": {
      ".wrapper": {
        position: "relative",
        paddingTop: "50px",
        paddingBottom: "50px",
      },
      p: {
        fontWeight: "bold"
      },
      img: {
        position: "absolute",
        opacity: 0.3,
        right: 0,
        top: 0
      }
    }
  },
  inputs: [
    {
      name: "description",
      type: "html",
      value: "<p>VFC Healthcare Solutions LLC has gone through a rigorous peer review process and demonstrated to <a href=\"https://carf.org/\" target=\"_blank\">CARF</a> that it provides high quality services.</p>"
    },
    {
      name: "image",
      type: "image",
      value: "assets/carf.webp"
    }
  ],
  render: ({env, image, description}) => {
    return `
      <div class="wrapper">
       <img src="${env.assetsOrigin}${image}" alt="carf logo" width="150" height="150">
       ${description}
      </div>
    `
  }
}
