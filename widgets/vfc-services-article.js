export default {
  id: "vfc-services-article",
  title: "Services article",
  inputs: [],
  style: `
#services {
 --header-bg: #7196a8;
 --section-gap: 50px;
}

#services > * {
 width: calc(50% - 30px)
}

#services p {
 line-height: 165%;
}

#services header {
 width: 100%;
 background: linear-gradient(90deg, var(--header-bg) 60%, #d2dce4 0) no-repeat 0 0;
}

#services header img {
 float: right;
 background: var(--header-bg);
 max-height: 300px;
}

#services header h2 {
 font-size: 2rem;
 background: var(--vfc-color);
 color: #fff;
 margin: 0;
 padding: 10px 20px;
 clear: both;
}

#services main {
 display: flex;
 flex-wrap: wrap;
 gap: 60px var(--section-gap);
 width: 100%;
 padding-top: 35px;
 padding-bottom: 35px;
 justify-content: space-between;
}

#services main > * {
 width: calc(50% - var(--section-gap));
}

#services main section:nth-of-type(odd) {
 position: relative;
}

#services main section:nth-of-type(odd)::after {
 content: '';
 display: inline-block;
 width: 1px;
 height: 70%;
 position: absolute;
 right: calc(var(--section-gap) * -1);
 top: 50%;
 transform: translateY(-50%);
 background: var(--vfc-color)
}

#services h3 {
 font-size: 2.8rem;
 font-weight: 300;
 margin-bottom: 20px;
}

#services ul {
 margin: 20px 0;
}

#services li {
 margin: 15px 0;
 line-height: 165%;
}

#services .btn {
 margin-top: 40px;
}

#services .call-us-btn {
 background: var(--vfc-color);
 color: #fff;
 padding: 10px 25px;
 text-decoration: none;
 border-radius: 20px;
 font-weight: bold;
 margin-top: 40px;
 display: inline-block;
}

@media screen and (max-width: 1024px) {
 #services main {
  gap: 30px;
 }
 
 #services main > * {
  width: auto;
  max-width: 100%;
  min-width: 425px;
 }
 
 #services main section:nth-of-type(odd)::after {
  display: none;
 }
}

@media screen and (max-width: 520px) {
 #services header {
  padding: 0;
 }
 
 #services header img {
  float: none;
 }
 
 #services h3 {
  font-size: 2rem;
 }
}

@media screen and (max-width: 435px) {
 #services main > * {
  min-width: 200px;
 }
}
`,
  content: `
  <article id="services">
  <header class="wrapper">
   <img src="/assets/vfc-healthcare-solutions-service.png" alt="vfc healthcare solutions services">
   <h2>Services</h2>
  </header>
  <main class="wrapper">
   <section>
    <h3 id="adult-family-care">Adult Foster/Family Care</h3>
    <p>Our Adult Foster Care (AFC) services provide a compassionate and personalized alternative to Nursing Home or
       Assisted Living placement for qualified clients. This program empowers individuals to remain in the
       familiarity
       and comfort of their homes while receiving the care and support they need.
    </p>
    <p><strong><em>Why choose Adult Family Care?</em></strong></p>
    <ul>
     <li><strong>Familiar home environment</strong>: Our Adult Family Care members continue to reside in the
                                                   comfort
                                                   of their own homes or family members’ homes.
     </li>
     <li>
      <strong>Financial Support for Caregivers</strong>: Our caregivers receive tax-free payments to help decrease
                                                       the financial burdens often associated with caregiving.
     </li>
     <li>
      <strong>Dedicated Care Team</strong>: Our nurses and case managers conduct regular home visits to provide
                                          support and resources to caregivers and members receiving care.
     </li>
     <li><strong>24-Hour Support</strong>: Our Adult Family Care members and caregivers receive 24-hour support
                                         from
                                         our staff for guidance and safety.
     </li>
    </ul>
    <a href="/referrals" class="btn">Request Service</a>
   </section>
   <section>
    <h3 id="homecare">Homecare Services</h3>
    <p>At VFC, we understand the challenges many individuals face when deciding to stay in the place they cherish
       most
       – their home.</p>
    <p>Our mission is to uphold the dignity, comfort, and safety of our clients by providing skilled nursing and
       non-skilled services tailored to their needs. We work closely with clients, their families, and case managers
       to ensure seamless coordination of care, enabling individuals to remain at home with confidence and peace of
       mind.</p>
    <p>Our comprehensive services include:</p>
    <ul>
     <li><strong>Homemaking</strong>: Assisting with household tasks to create a safe and comfortable living
                                    environment.
     </li>
     <li><strong>Home Health Aides</strong>: Providing hands-on assistance with daily living activities.</li>
     <li><strong>Personal Care</strong>: Helping clients maintain personal hygiene and self-care routines.</li>
     <li><strong>Supportive Home care Aides</strong>: Offering additional support to meet specific needs.</li>
     <li><strong>Companionship</strong>: Reducing loneliness and enhancing emotional well-being through friendly
                                       interactions.
     </li>
     <li><strong>Private Duty Nursing</strong>: Delivering one-on-one skilled nursing care tailored to medical
                                              requirements.
     </li>
    </ul>
    <p>With VFC, you can trust that your loved ones will receive compassionate, high-quality care, ensuring their
       well-being and independence at home.</p>
   </section>
   <section>
    <h3 id="nurse-recruiting-staffing">Nurse Recruiting/Staffing</h3>
    <p>VFC provides both short-term and long-term staffing solutions, screening and placing highly skilled,
       experienced nurses and advanced practice clinicians who are ready to work from day one. Each nurse is
       carefully
       vetted to ensure a strong match with your facility, promoting retention and delivering excellent care.</p>
    <h3 id="nurse-case-management">Nurse Case Management</h3>
    <p>Our staff of seasoned nurses with vast experience in case management provide education to clients about their
       disease management and act as liaisons between clients, their providers, and the health insurance companies.
       As
       clients navigate the often complicated health care system, our nurses support them in their choice of
       treatment
       and link them to resources available in their community. </p>
    <a href="tel:7744804991" class="call-us-btn">Call us: (774) 480 - 4991</a>
   </section>
   <img src="/assets/nurse-force.jpeg" alt="vfc nurses">
  </main>
 </article>
  `
}
