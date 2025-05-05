export default {
   id: "vfc-header",
   title: "Header",
  inputs: [
    {
      name: 'menu',
      type: 'group',
      definitions: [
        {
          name: 'referrals',
          type: 'string',
          value: 'Referrals'
        },
        {
          name: 'services',
          type: 'string',
          value: 'Services'
        },
        {
          name: 'aboutus',
          type: 'string',
          value: 'About Us'
        },
        {
          name: 'news',
          type: 'string',
          value: 'News'
        },
        {
          name: 'careers',
          type: 'string',
          value: 'Careers'
        },
        {
          name: 'contactus',
          type: 'string',
          value: 'Contact Us'
        }
      ]
    }
  ],
  style: ({env}) => `
#main-header {
 position: sticky;
 top: 0;
 left: 0;
 background: #fff;
 z-index: 1000;
 border-bottom: 1px solid #ddd;
}

#main-header .branding {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 10px;
 padding-bottom: 10px;
}

/* #contact-bar */

#contact-bar {
 background: var(--vfc-highlight-color);
 padding-top: 6px;
 padding-bottom: 8px;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 gap: 20px;
}

#contact-bar a {
 color: #fff;
 font-size: 1rem;
 text-decoration: none;
}

#contact-bar span {
 font-weight: bold;
}

#contact-bar .primary {
 padding-left: 25px;
 background: url("${env.assetsOrigin || '/'}assets/icons/phone.icon.svg") no-repeat left center;
 background-size: 20px;
}

@media screen and (max-width: 520px) {
 #contact-bar a:first-of-type {
  display: none;
 }
}

/* .logo */

.logo {
 display: flex;
 gap: 10px;
 align-items: center;
 text-decoration: none;
 color: #222;
}

.logo h1 {
 margin: 0;
 font-size: 21px;
 line-height: 120%;
 font-weight: bolder;
}

.logo p {
 margin: 0;
 font-size: 14px;
 color: #555;
}

.logo:hover {
 text-decoration: none;
}

@media screen and (max-width: 520px) {
 .logo img {
  width: 34px;
  height: 34px;
 }
 
 .logo h1 {
  font-size: 1rem
 }
 
 .logo p {
  font-size: 0.8rem;
 }
}

@media screen and (max-width: 375px) {
 .logo img {
  display: none;
 }
}
 
 /* nav */

nav {
 display: flex;
 align-items: center;
 gap: 15px;
}

nav ul {
 display: flex;
 gap: 15px;
 list-style: none;
 margin: 0;
 padding: 0;
}

nav ul li a {
 color: #222;
 font-weight: bold;
 text-decoration: none;
 text-transform: capitalize;
 border-bottom: 2px solid transparent;
 padding: 5px 10px;
 transition: border 0.25s ease;
}

nav ul li a.primary {
 background: var(--vfc-color);
 color: #fff;
 border-radius: 25px;
 border-bottom: none;
 padding: 5px 15px;
}

nav ul li a:hover,
nav ul li a[active] {
 color: var(--vfc-highlight-color);
 border-bottom: 2px solid var(--vfc-highlight-color);
}

nav ul li a.primary:hover,
nav ul li a.primary[active]{
 border: none;
 color: #fff;
 background: var(--vfc-highlight-color);
}

#mobile-menu,
#mobile-menu-close {
 display: none;
}

@media screen and (max-width: 1024px) {
 nav {
  display: none;
  position: relative;
 }
 
 #mobile-menu {
  display: block;
  width: 35px;
  height: 16px;
  background: linear-gradient(to bottom, #222 4px, transparent 0, transparent calc(100% - 4px), #222 0);
  cursor: pointer;
 }
 
 nav:target {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  height: 100vh;
  width: 100vw;
  animation: fadeIn 0.3s forwards;
 }
 
 @keyframes fadeIn {
  from {
   background: rgba(0, 0, 0, 0);
  }
  to {
   background: rgba(0, 0, 0, 0.8);
  }
 }
 
 nav:target ul {
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #fff;
  width: 300px;
  padding: 25px;
  gap: 40px;
  transform: translateX(100%);
  animation: slideIn 0.2s ease 0.1s forwards;
 }
 
 @keyframes slideIn {
  from {
   transform: translateX(100%);
  }
  to {
   transform: translate(0);
  }
 }
 
 nav:target ul li {
  text-align: right;
 }
 
 nav:target ul li a {
  font-size: 1.6rem;
 }
 
 nav:target #mobile-menu-close {
  position: absolute;
  top: 50px;
  right: 30px;
  width: 30px;
  height: 30px;
  font-size: 2rem;
  display: inline-block;
  background: url("${env.assetsOrigin || '/'}assets/icons/close.icon.svg") no-repeat center center;
  z-index: 1;
  opacity: 0;
  animation: appear 0.3s ease 0.2s forwards;
 }
 
 @keyframes appear {
  from {
   opacity: 0;
  }
  to {
   opacity: 1;
  }
 }
 
 nav:target #mobile-menu-close:hover,
 nav:target #mobile-menu-close:active {
  border-bottom: none;
 }
}
`,
  render: ({page = '', menu = {}, env}) => {
    const navItems = [
      ...(menu.referrals ? [{name: 'referrals', label: menu.referrals, pathname: '/referrals', cls: 'primary'}] : []),
      ...(menu.services ? [{name: 'services', label: menu.services, pathname: '/services', cls: ''}] : []),
      ...(menu.aboutus ? [{name: 'aboutus', label: menu.aboutus, pathname: '/about', cls: ''}] : []),
      ...(menu.news ? [{name: 'news', label: menu.news, pathname: '/news', cls: ''}] : []),
      ...(menu.careers ? [{name: 'careers', label: menu.careers, pathname: '/careers', cls: ''}] : []),
      ...(menu.contactus ? [{name: 'contactus', label: menu.contactus, pathname: '/contact', cls: ''}] : []),
    ].map(item => `<li><a href="${item.pathname}" class="${item.cls}" ${page === item.name ? 'active' : ''}>${item.label}</a></li>`)
      .join('');
    
    return `
      <header id="main-header">
        <div class="branding wrapper">
         <a href="/" class="logo">
          <img src="${env.assetsOrigin || '/'}assets/vfc-healthcare-solutions-logo.svg" alt="vfc healthcare solutions logo" width="45"
               height="45">
          <div class="details">
           <h1>VFC Healthcare Solutions</h1>
           <p><em>Veracity. Fidelity. Compassion</em></p>
          </div>
         </a>
         <a href="#menu" id="mobile-menu" role="button" aria-label="open mobile menu"></a>
         <nav id="menu">
          <a href="#" id="mobile-menu-close" role="button" aria-label="close mobile menu"></a>
          <ul>${navItems}</ul>
         </nav>
        </div>
      </header>
    `;
  }
}
