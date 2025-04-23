export default {
   id: "vfc-footer",
   title: "Footer",
  inputs: [],
  style: `
footer {
 background: #EBFBFF;
 padding-top: 35px;
 padding-bottom: 25px;
}

footer .content {
 display: flex;
 justify-content: space-between;
 margin: 40px 0;
}

footer address {
 display: flex;
 flex-direction: column;
 gap: 5px;
}

footer address .fax {
 margin: 20px 0;
}

footer address a {
 text-decoration: none;
 color: #222;
}

footer address a:hover {
 text-decoration: underline;
}

footer address .mail-address span {
 display: block;
}

footer section ul {
 padding: 0;
 list-style: none;
}

footer section ul li {
 margin: 15px 0;
}

footer section ul li a {
 color: #222;
 padding: 10px 0;
}

footer #social {
 text-align: right;
}

footer #social a {
 margin-left: 15px;
}

@media screen and (max-width: 960px) {
 footer .content {
  gap: 45px;
  flex-wrap: wrap;
 }
 
 footer .content > * {
  min-width: 250px;
  width: 100%;
  flex: 1;
 }
 
 footer #social {
  text-align: left;
 }
}
`,
  content: `
<footer class="wrapper">
  <a href="/" class="logo">
   <img src="/assets/vfc-healthcare-solutions-logo.svg" alt="vfc healthcare solutions logo" width="45" height="45">
   <div class="details">
    <h1>VFC Healthcare Solutions</h1>
    <p><em>Veracity. Fidelity. Compassion</em></p>
   </div>
  </a>
  <div class="content">
   <address>
    <a href="tel:7744804991"><strong>Phone</strong>: (774) 480 - 4991</a>
    <a href="tel:7744804991"><strong>Tol Free</strong>: (888) 718 - 4683</a>
    <a href="tel:7742729322" class="fax"><strong>Fax</strong>: (774) 272 - 9322</a>
    <a class="mail-address"
       href="https://maps.apple.com/?address=810%20Washington%20St,%20Stoughton,%20MA%20%2002072,%20United%20States&ll=42.123759,-71.101336&q=810%20Washington%20St&t=m">
     <span>810 Washington Street,</span>
     <span>Stoughton,</span>
     <span>MA. 02072</span>
    </a>
   </address>
   <section id="footer-services">
    <h4>Services:</h4>
    <ul>
     <li><a href="/services#adult-family-care">Adult Foster/Family Care</a></li>
     <li><a href="/services#homecare">Home care</a></li>
     <li><a href="/services#nurse-recruiting-staffing">Nurse Recruiting/Staffing</a></li>
     <li><a href="/services#nurse-case-management">Nurse Case Management</a></li>
    </ul>
   </section>
   <section id="quick-links">
    <h4>Quick Links:</h4>
    <ul>
     <li><a href="/referrals">Referrals</a></li>
     <li><a href="/news">News</a></li>
     <li><a href="/careers">Careers</a></li>
     <li><a href="https://generations.idb-sys.com/Views/loginnew.aspx?ReturnUrl=%2f">Caregiver Portal</a></li>
    </ul>
   </section>
   <section id="social">
    <h4>Follow Us:</h4>
    <a href="https://www.facebook.com/people/VFC-Healthcare-Solutions/100086915456939/"
       class="facebook-social-black"><span>facebook</span></a>
    <a href="https://www.instagram.com/vfchealthcaresolutions/?igshid=YmMyMTA2M2Y%3D"
       class="instagram-social-black"><span>instagram</span></a>
   </section>
  </div>
  <p><small>Copyright © 2025 VFC Healthcare Solutions - All Rights Reserved.</small></p>
</footer>
  `
}
