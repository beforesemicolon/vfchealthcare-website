export default {
   id: "vfc-credibility",
   title: "Credibility",
  inputs: [],
  style: `
#credibility {
 display: flex;
 gap: 25px;
 align-items: center;
 padding-top: 25px;
 padding-bottom: 15px;
}

#credibility p {
 max-width: 60%;
}

@media screen and (max-width: 1024px) {
 #credibility p {
  max-width: 100%;
 }
}

@media screen and (max-width: 425px) {
 #credibility {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
 }
 
 #credibility p {
  font-weight: bold;
 }
 
 #credibility img {
  position: absolute;
  opacity: 0.3;
  right: 0;
  top: 0;
 }
}
`,
  render: ({env}) => `
<div id="credibility" class="wrapper">
   <img src="${env.assetsOrigin}assets/carf.png" alt="carf logo" width="150" height="150">
   <p>VFC Healthcare Solutions LLC has gone through a rigorous peer review process and
      demonstrated to CARF that it provides high quality services. <a href="https://carf.org/" target="_blank">Learn
                                                                                                               more</a>.
   </p>
  </div>
  `
}
