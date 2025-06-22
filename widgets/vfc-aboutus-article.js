export default {
  id: "vfc-aboutus-article",
  cssSelector: "#about-us",
  title: "About us article",
  inputs: [
    {
      type: "textarea",
      name: "quote",
      value: "Kindness is the language which the deaf can hear and the blind can see.",
    },
    {
      type: "text",
      name: "quoteAuthor",
      value: "Mark Twain",
    },
    {
      type: "html",
      name: "content",
      value: "<p>The story of VFC Healthcare Solutions began with a dedication to community and passionate healthcare professionals who started from the bottom and worked their way up to become Registered Nurses and advanced Practice Clinicians.</p>" +
        "<p>Our journey gives us a unique understanding of the healthcare system and the importance of bridging the gaps that affect the communities we serve.</p>" +
        "<p>Our team provides top-notch quality care that reflects our name to all our clients. VFC stands for our shared values of:</p>" +
        "<ul><li><strong>Veracity</strong>: We are honest in all our interactions with our clients and other professionals</li>" +
        "<li><strong>Fidelity</strong>: We keep our commitments to our clients to build trust, rapport and credibility</li>" +
        "<li><strong>Compassion</strong>: We understand where our clients are coming from and empathize with them, while providing needed care and available resources.</li></ul>"
    },
  ],
  style: {
    "#about-us": {
      "--aboutus-gap": "30px",
      display: "flex",
      gap: "var(--aboutus-gap)",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingBottom: "50px",
      header: {
        width: "100%",
        h2: {
          fontSize: "2rem",
          background: "var(--vfc-color)",
          color: "#fff",
          margin: 0,
          padding: "10px 20px",
          clear: "both"
        }
      },
      main: {
        width: "calc(50% - var(--aboutus-gap))"
      },
      img: {
        width: "calc(50% - var(--aboutus-gap))"
      },
      p: {
        lineHeight: "165%",
        "&:first-of-type::first-letter": {
          initialLetter: 2,
          textTransform: "capitalize",
          marginRight: "2px"
        }
      },
      blockquote: {
        fontSize: "2.8rem",
        marginBottom: "80px",
        fontFamily: "Futura, serif",
        lineHeight: "130%",
        "&::before": {
          content: '""',
          display: "block",
          fontSize: "5rem",
          lineHeight: "75%",
          marginLeft: "-20px"
        },
        ".author": {
          fontSize: "1.2rem",
          display: "block",
          textAlign: "right",
          marginTop: "30px",
          paddingRight: "50px",
          fontStyle: "italic",
          fontWeight: 100
        }
      },
      ul: {
        margin: "20px 0"
      },
      li: {
        margin: "15px 0",
        lineHeight: "165%"
      }
    },
    "@media screen and (max-width: 1024px)": {
      "#about-us": {
        gap: "30px 0",
        main: {
          width: "100%"
        },
        img: {
          width: "100%"
        }
      }
    },
    "@media screen and (max-width: 520px)": {
      "#about-us": {
        blockquote: {
          fontSize: "2rem"
        }
      }
    },
    "@media screen and (max-width: 400px)": {
      "#about-us": {
        blockquote: {
          fontSize: "1.4rem"
        }
      }
    }
  },
  render: ({env, content, header, quote, quoteAuthor}) => {
    return `
    <article class="wrapper" id="about-us">
      <main>
       <blockquote>${quote}<span class="author">-- ${quoteAuthor}</span></blockquote>
       ${content}
      </main>
      <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-aboutus.webp" alt="vfc healthcare solutions founder Florence">
    </article>
  `
  }
}
