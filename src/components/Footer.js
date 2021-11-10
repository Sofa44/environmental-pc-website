import React from "react";
import Github from "@material-ui/icons/Github";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
