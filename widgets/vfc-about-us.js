export default {
   id: "vfc-about-us",
   title: "About us",
  inputDefinitions: [],
  stylesheets: [
`
#about-us {
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px;
}

#about-us > * {
  width: calc(50% - 30px);
}

@media screen and (max-width: 1024px) {
  #about-us > * {
    width: 100%;
  }
}
`
  ],
  content: `
<section id="about-us" class="wrapper">
 <h2>Welcome to VFC</h2>
 <p>VFC Healthcare Solutions mission is to provide high quality, person-centered services to our members to help
    them age in place and remain in their community of choice. Our goal is to improve access to care and community
    resources through, education, advocacy, and partnership with other stakeholders.</p>
</section>
  `
}
