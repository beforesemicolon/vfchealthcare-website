export default {
  id: "vfc-cookies-warning",
  cssSelector: "#vfc-cookies-warning",
  name: "Cookies Warning",
  style: {
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
  },
  inputs: [
    {
      type: "text",
      name: "message",
      value: "We use cookies to understand how people use our site so we can improve the experience. We do not collect personal data unless you explicitly provide it to us."
    },
    {
      type: "text",
      name: "buttonText",
      value: "I understand"
    }
  ],
  render: ({message, buttonText}) => {
    return `
      <div class="wrapper">
        <span>${message}</span>
        <button type="button">${buttonText}</button>
      </div>
      <script>
        (function() {
          const warning = document.getElementById('vfc-cookies-warning');
          const btn = warning.querySelector('button');
          
          if (window.localStorage.getItem('cookiesWarningDismissed')) {
            warning.style.display = 'none';
          }
          
          btn?.addEventListener('click', function() {
            window.localStorage.setItem('cookiesWarningDismissed', '1');
            warning.style.display = 'none';
          });
        })();
      </script>
    `
  }
}
