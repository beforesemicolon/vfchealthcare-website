export default {
  id: "vfc-satisfaction",
  cssSelector: "#vfc-satisfaction",
  name: "Satisfaction",
  style: {
    ".wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
      background: "var(--vfc-color)",
      color: "#fff",
      textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    "p": {
      margin: 0,
      fontSize: "1.4rem",
      fontWeight: "bold"
    },
    ".rating": {
      display: "flex",
      gap: "10px"
    },
    "@media screen and (max-width: 960px)": {
      "p": {
        fontSize: "3vw"
      }
    },
    "@media screen and (max-width: 768px)": {
      ".wrapper": {
        gap: "20px",
        "& > img": {
          display: "none"
        },
      },
      "p": {
        textAlign: "left"
      },
      ".rating": {
        "img": {
          width: "3vw"
        }
      }
    }
  },
  inputs: [
    {
      name: "satisfaction",
      type: "text",
      value: "Year After Year Customer Satisfaction",
    }
  ],
  render: ({env, satisfaction}) => {
    return `
      <div class="wrapper">
       <img src="${env.assetsOrigin || '/'}assets/icons/care.icon.svg" alt="care icon" height="35">
       <p>${satisfaction}</p>
       <div class="rating">
        <img src="${env.assetsOrigin || '/'}assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
        <img src="${env.assetsOrigin || '/'}assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
        <img src="${env.assetsOrigin || '/'}assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
        <img src="${env.assetsOrigin || '/'}assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
        <img src="${env.assetsOrigin || '/'}assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
       </div>
      </div>
    `
  }
}
