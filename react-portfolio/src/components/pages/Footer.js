import React from "react";
const footerStyle = {
    backgroundColor: "#333", // Dark background color
    color: "white", // Text color
    textAlign: "center", // Center-align the content
    padding: "10px", // Adding padding to the footer
  };
  
  const Footer = () => {
    return (
      <footer style={footerStyle}>
        <p>Jess Rama's React Portfolio &copy; {new Date().getFullYear()}</p>
      </footer>
    );
  };

export default Footer;
