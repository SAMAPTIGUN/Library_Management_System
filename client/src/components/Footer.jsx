// client/my_app/src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
