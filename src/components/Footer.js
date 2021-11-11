import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2021 CompanyName.com</p>
    </div>
  );
}

export default Footer;
