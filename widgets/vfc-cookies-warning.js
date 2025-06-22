export default {
  id: "vfc-cookies-warning",
  cssSelector: "#cookies-warning",
  title: "Cookies Warning",
  inputs: [
    {
      type: "text",
      name: "message",
      value: "This website uses cookies to ensure you get the best experience on our website."
    },
    {
      type: "text",
      name: "buttonText",
      value: "I understand"
    }
  ],
  style: {
    "#cookies-warning": {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      background: "#2e385f",
      color: "#fff",
      padding: "10px 0",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "center",
      ".wrapper": {
        display: "flex",
        alignItems: "center",
        gap: "20px"
      },
      "button": {
        fontSize: "16px",
      }
    }
  },
  render: ({message, buttonText, env}) => {
    return `
      <div id="cookies-warning" style="display:none;">
        <div class="wrapper">
          <span>${message}</span>
          <button id="cookies-warning-btn">${buttonText}</button>
        </div>
      </div>
      <script>
        (function() {
          const warning = document.getElementById('cookies-warning');
          const btn = document.getElementById('cookies-warning-btn');
          
          if (!window.localStorage.getItem('cookiesWarningDismissed')) {
            warning.style.display = 'flex';
          }
          
          btn && btn.addEventListener('click', function() {
            window.localStorage.setItem('cookiesWarningDismissed', '1');
            warning.style.display = 'none';
          });
        })();
      </script>
    `
  }
}
