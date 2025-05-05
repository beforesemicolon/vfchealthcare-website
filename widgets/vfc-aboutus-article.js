export default {
   id: "vfc-aboutus-article",
   title: "About us article",
  inputs: [],
  style: `
#about-us {
 --aboutus-gap: 30px;
 display: flex;
 gap: var(--aboutus-gap);
 flex-wrap: wrap;
 justify-content: space-between;
 padding-bottom: 50px;
}

#about-us header {
 width: 100%;
}

#about-us header h2 {
 font-size: 2rem;
 background: var(--vfc-color);
 color: #fff;
 margin: 0;
 padding: 10px 20px;
 clear: both;
}

#about-us main,
#about-us img {
 width: calc(50% - var(--aboutus-gap));
}

#about-us p {
 line-height: 165%;
}

#about-us p:first-of-type::first-letter {
 initial-letter: 2;
 text-transform: capitalize;
 margin-right: 2px;
}

#about-us blockquote {
 font-size: 2.8rem;
 margin-bottom: 80px;
 font-family: Futura, serif;
 line-height: 130%;
}

#about-us blockquote::before {
 content: '"';
 display: block;
 font-size: 5rem;
 line-height: 75%;
 margin-left: -20px;
}

#about-us blockquote .author {
 font-size: 1.2rem;
 display: block;
 text-align: right;
 margin-top: 30px;
 padding-right: 50px;
 font-style: italic;
 font-weight: 100;
}

#about-us ul {
 margin: 20px 0;
}

#about-us li {
 margin: 15px 0;
 line-height: 165%;
}

@media screen and (max-width: 1024px) {
 #about-us {
  gap: 30px 0
 }
 
 #about-us main,
 #about-us img {
  width: 100%;
 }
}

@media screen and (max-width: 520px) {
 #about-us blockquote {
  font-size: 2rem;
 }
}

@media screen and (max-width: 400px) {
 #about-us blockquote {
  font-size: 1.4rem;
 }
}




    `,
  render: ({env}) => `
<article class="wrapper" id="about-us">
  <header>
   <h2>About us</h2>
  </header>
  <main>
   <blockquote>
    Kindness is the language which the deaf can hear and the blind can see.
    <span class="author">-- Mark Twain</span>
   </blockquote>
   <p>The story of VFC Healthcare Solutions began with a dedication to community and passionate healthcare professionals who started from the bottom and worked their way up to become Registered Nurses and advanced Practice Clinicians.</p>
   <p>Our journey gives us a unique understanding of the healthcare system and the importance of bridging the gaps that affect the communities we serve.</p>
   <p>Our team provides top-notch quality care that reflects our name to all our clients. VFC stands for our shared values of:</p>
   <ul>
    <li><strong>Veracity</strong>: We are honest in all our interactions with our clients and other professionals</li>
    <li><strong>Fidelity</strong>: We keep our commitments to our clients to build trust, rapport and credibility</li>
    <li><strong>Compassion</strong>: We understand where our clients are coming from and empathize with them, while providing needed care and available resources.</li>
   </ul>
  </main>
  <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-aboutus.jpeg" alt="vfc healthcare solutions founder Florence">
 </article>
  `
}
