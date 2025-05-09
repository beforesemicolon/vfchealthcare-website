export default {
   id: "vfc-careers",
   title: "Careers",
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
      nane: "headline",
      value: "Join Our Team!"
    },
    {
      type: "list",
      name: "jobPosts",
      label: "Job Posts",
      definitions: [
        {
          type: "group",
          name: "jobPost",
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
  render: ({env, header, disclosure, jobPosts, headline}) =>`
<main id="careers">
  <header class="wrapper">
   <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-careers.png" alt="vfc healthcare solutions careers">
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
