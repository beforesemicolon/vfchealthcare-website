export default {
   id: "vfc-careers",
   title: "Careers",
  inputs: [],
  style: ({env}) => `
#careers {
 margin-bottom: 50px;
}

#careers header {
 width: 100%;
 background: #4b3627;
}

#careers header h2 {
 font-size: 2rem;
 background: var(--vfc-color);
 color: #fff;
 margin: 0;
 padding: 10px 20px;
 clear: both;
}

#careers header img {
 width: 100%;
}

#careers .disclosure {
 max-width: 60%;
 margin: 40px 0 30px;
}

#careers h3 {
 font-size: 2.4rem;
 font-weight: 300;
}

#careers .job-posts {
 display: flex;
 flex-wrap: wrap;
 gap: 30px;
}

#careers .job-post {
 background: #f5f5f5;
 padding: 20px;
 flex: 2 0 400px;
 border-radius: 5px;
 max-width: calc(50% - 15px);
 min-width: 300px;
}

#careers .job-post h4 {
  font-size: 1.5rem;
 margin: 0 0 3px;
}

#careers .job-post .location {
 font-size: 0.8rem;
 background: #222;
 color: #fff;
 display: inline-block;
 padding: 3px 12px;
 border-radius: 25px;
 font-weight: 700;
}

#careers .job-post .payment {
 margin-right: 10px;
}

#careers .job-post a {
 text-transform: capitalize;
 color: var(--vfc-highlight-color);
 display: flex;
 font-weight: bold;
}

#careers .job-post a::after {
 content: '';
 display: inline-block;
 width: 20px;
 height: 20px;
 margin-left: 3px;
 background: url("${env.assetsOrigin || '/'}assets/icons/ext-link.icon.svg") no-repeat center right;
 background-size: 18px;
}

@media screen and (max-width: 1024px){
 #careers .disclosure {
  max-width: 100%;
 }
 
 #careers header {
  padding: 0;
 }
}

@media screen and (max-width: 680px){
 #careers .job-post {
  max-width: 100%;
 }
}


    `,
  render: ({env}) =>`
<main id="careers">
  <header class="wrapper">
   <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-careers.png" alt="vfc healthcare solutions careers">
   <h2>Careers</h2>
  </header>
  <div class="content wrapper">
   <p class="disclosure">
    VFC Healthcare Solutions as an equal opportunity employer, does not discriminate on the basis of race, color, religion, sex, national origin, age, disability, or genetic information.
   </p>
   <h3>Join Our Team!</h3>
   <div class="job-posts">
    <div class="job-post">
     <p class="location">Boston, MA</p>
     <h4>Certified Nurse Assistant</h4>
     <p>
      <strong class="payment">$25 - $35 per hour</strong>
      <span class="benefits">Medical + 2 benefits</span>
     </p>
     <a href="" target="_blank">Apply</a>
    </div>
    <div class="job-post">
     <p class="location">Boston, MA</p>
     <h4>Certified Nurse Assistant</h4>
     <p>
      <strong class="payment">$25 - $35 per hour</strong>
      <span class="benefits">Medical + 2 benefits</span>
     </p>
     <a href="" target="_blank">Apply</a>
    </div>
    <div class="job-post">
     <p class="location">Boston, MA</p>
     <h4>Certified Nurse Assistant</h4>
     <p>
      <strong class="payment">$25 - $35 per hour</strong>
      <span class="benefits">Medical + 2 benefits</span>
     </p>
     <a href="" target="_blank">Apply</a>
    </div>
   </div>
  </div>
 </main>
  `
}
