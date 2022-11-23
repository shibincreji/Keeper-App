import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ by <a href="https://github.com/shibincreji">Shibin C Reji</a>, {year}</p>
    </footer>
  );
}

export default Footer;
