import React from "react";
import "./Footer.css";
import playstore from "../assets/playstore.png";
import appstore from "../assets/Appstore.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>Online Shop</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; TCM</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/_chirag_munjal_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          Instagram
        </a>
        <a href="https://instagram.com/_chirag_munjal_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
