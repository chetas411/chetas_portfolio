import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div id="navbar">
      <div className="navbar-right">
        <div className="navbar-item">
          <a href="#about">About</a>
        </div>
        <div className="navbar-item">
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-item">
          <a href="#skills-section">Skills</a>
        </div>
        <div className="navbar-item">
          <a
            href="https://drive.google.com/file/d/1npSuH3SWHockdlAYYZKze_ZRymCat0AL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="navbar-left">
        <a
          href="https://www.linkedin.com/in/chetas-sharma-184496167/"
          className="social-icons"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <LinkedInIcon style={{ fontSize: "2.25rem" }} />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/sharma_chetas411/"
          className="social-icons"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <InstagramIcon style={{ fontSize: "2.25rem" }} />
          </IconButton>
        </a>
        <a
          href="https://github.com/chetas411"
          className="social-icons"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <GitHubIcon style={{ fontSize: "2.25rem" }} />
          </IconButton>
        </a>
        <a
          href="mailto:sharmachetas.111@gmail.com"
          className="social-icons"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <EmailIcon style={{ fontSize: "2.25rem" }} />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
