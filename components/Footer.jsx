import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Appicoders. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
