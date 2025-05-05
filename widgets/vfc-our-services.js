export default {
   id: "vfc-our-services",
   title: "Our services",
  inputs: [],
  style: `
#services {
 background:
  linear-gradient(90deg, var(--vfc-color) 50%, transparent 0) no-repeat 0 var(--gap-size),
  linear-gradient(90deg, transparent 50%, #d2dce4 0) no-repeat 0 calc(var(--gap-size) * -1);
 z-index: 1;
 position: relative;
}

#services h2 {
 font-size: 2rem;
 margin: 0 0 0.5rem;
 transform: translateY(-15px);
}

#services .content {
 display: flex;
}

#services > .content * {
 flex: 1;
 max-width: 50%;
}

#services > .content img {
 transform: translateY(calc(var(--gap-size) * -1));
 background: #abb4c0;
}

#services .details {
 color: #fff;
 position: relative;
}

#services .details::after {
 content: "";
 display: inline-block;
 width: var(--gap-size);
 height: var(--gap-size);
 background: #222;
 position: absolute;
 right: calc(var(--gap-size) * -1);
 bottom: 0;
 background: linear-gradient(45deg, var(--vfc-color) 50%, #429FBA 0 );
}

#services .details ul,
#services .details li {
 min-width: 100%;
}

#services .details ul {
 margin: 30px 0;
 padding-left: 20px;
}

#services .details li {
 margin: 15px 0;
}

#services .details li::marker {
 font-size: 1.4em;
}

#services .details a {
 color: #fff;
 text-decoration: none;
}

#services .details a:not(.btn) {
 font-size: 28px;
}

#services .details a:not(.btn):hover {
 text-decoration: underline;
 text-underline-offset: 8px;
}

#services .details .btn {
 background: #fff;
 color: #222;
 margin-bottom: 20px;
}

@media screen and (max-width: 1024px) {
 #services {
  background: none;
  padding: 0;
 }
 
 #services h2 {
  transform: none;
  padding: 0 25px;
  margin-bottom: 25px;
 }
 
 #services .content {
  color: #222;
  display: flex;
  align-items: flex-start;
  background: #abb4c0;
  padding-left: 25px;
  overflow: hidden;
 }
 
 #services > .content * {
  max-width: 100%;
  transform: none;
 }
 
 #services .content img {
  transform: none;
  height: 100%;
  min-width: 60%;
 }
 
 #services .content .details {
  min-width: 40%;
 }
 
 #services .content .details::after {
  display: none;
 }
 
 #services .content .details ul a {
  color: #222;
  font-size: 1.6rem;
 }
 
 #services .content .details .btn {
  margin: 5px 0 20px;
 }
}

@media screen and (max-width: 960px) {
 #services .content {
  flex-direction: column-reverse;
  padding: 0;
 }
 
 #services .content .details {
  width: 100%;
  background: #fff;
  padding-left: 25px;
  color: #222;
 }
 
 #services .content img {
  max-height: 120px;
  width: auto;
  align-self: flex-end;
  min-width: unset;
 }
 
 #services .content .details .btn {
  background: #222;
  color: #fff;
 }
}
`,
  render: ({env}) => `
<section id="services" class="wrapper">
 <h2>Our Services</h2>
 <div class="content">
  <div class="details">
   <ul>
    <li><a href="/services#adult-family-care">Adult Foster/Family Care</a></li>
    <li><a href="/services#homecare">Home care</a></li>
    <li><a href="/services#nurse-recruiting-staffing">Nurse Recruiting/Staffing</a></li>
    <li><a href="/services#nurse-case-management">Nurse Case Management</a></li>
   </ul>
   <a href="/services" class="btn">Learn More</a>
  </div>
  <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-service.png" alt="VFC healthcare solutions services">
 </div>
</section>
  `
}
