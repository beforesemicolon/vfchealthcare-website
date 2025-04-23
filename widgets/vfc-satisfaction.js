export default {
  id: "vfc-satisfaction",
  title: "Satisfaction",
  inputDefinitions: [],
  stylesheets: [
`

#satisfaction {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 25px;
 background: #216C81;
 color: #fff;
 text-align: center;
 padding-top: 10px;
 padding-bottom: 10px;
}

#satisfaction p {
 margin: 0;
 font-size: 1.4rem;
 font-weight: bold;
}

#satisfaction .rating {
 display: flex;
 gap: 10px;
}

@media screen and (max-width: 960px) {
 #satisfaction p {
  font-size: 3vw;
 }
}

@media screen and (max-width: 768px) {
 #satisfaction {
  gap: 20px;
 }
 
 #satisfaction > img {
  display: none;
 }
 
 #satisfaction p {
  text-align: left;
 }
 
 #satisfaction .rating img {
  width: 3vw;
 }
}
`
  ],
  content: `
<div id="satisfaction" class="wrapper">
   <img src="./assets/icons/care.icon.svg" alt="care icon" height="35">
   <p>Year After Year Customer Satisfaction</p>
   <div class="rating">
    <img src="./assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
    <img src="./assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
    <img src="./assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
    <img src="./assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
    <img src="./assets/icons/star.icon.svg" alt="star icon" width="24" height="24">
   </div>
  </div>
  `
}
