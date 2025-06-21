export default {
  id: "vfc-credibility",
  title: "Credibility",
  cssSelector: "#credibility",
  inputs: [
    {
      name: "description",
      type: "html",
      value: "<p>VFC Healthcare Solutions LLC has gone through a rigorous peer review process and demonstrated to <a href=\"https://carf.org/\" target=\"_blank\">CARF</a> that it provides high quality services.</p>"
    }
  ],
  style: {
    "#credibility": {
      display: "flex",
      gap: "25px",
      alignItems: "center",
      paddingTop: "25px",
      paddingBottom: "15px",
      p: {
        maxWidth: "60%"
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#credibility": {
        p: {
          maxWidth: "100%"
        }
      }
    },
    "@media screen and (max-width: 425px)": {
      "#credibility": {
        position: "relative",
        paddingTop: "50px",
        paddingBottom: "50px",
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
    }
  },
  render: ({env, description}) => {
    return `
      <div id="credibility" class="wrapper">
       <img src="${env.assetsOrigin || '/'}assets/carf.png" alt="carf logo" width="150" height="150">
       ${description}
      </div>
    `
  }
}
