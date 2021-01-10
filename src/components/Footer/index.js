import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import React, { Fragment } from "react";
import SectionHeader from "../SectionHeader";
import "../../App.css";
const Footer = React.memo(() => {
  return (
    <Fragment>
      <br />
      <SectionHeader text="Made by Chamod Gamage" />

      <h1>
        {" "}
        <a
          className="h0"
          href="https://github.com/chamod-gamage"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon fontSize="inherit" />
        </a>{" "}
        <a
          className="h0"
          href="https://www.linkedin.com/in/chamod-gamage/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>{" "}
        <a
          className="h0"
          href="https://www.instagram.com/chamod.og/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon fontSize="inherit" />
        </a>{" "}
        <a
          className="h0"
          href="mailto: chamodgamage26@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailIcon fontSize="inherit" />
        </a>{" "}
      </h1>
    </Fragment>
  );
});

export default Footer;
