import React from "react";
import './Navbar.css';
import githubIcon from "../../assets/github-icon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";
import logo from "../../assets/logo.png";
import resume from "../../assets/resume.pdf";

const Navbar = () => {

        const openPdf = () => {
          window.open(resume, '_blank');
        };

    return(
        <div className="navbar-outer-container">
            <div id='navbar-container'>
                <div className='logo-container'>
                    <img className="navbar-logo" src={logo}/>
                </div>
                <div className="navbar-socials">
                    <div className="navbar-social-div">
                        <a href="#" className="navbar-social-link">
                            <img className="navbar-social-img" src={githubIcon}/>
                        </a>
                    </div>
                    <div className="navbar-social-div">
                        <a href="#" className="navbar-social-link">
                            <img className="navbar-social-img" src={linkedInIcon}/>
                        </a>
                    </div>
                </div>
                <div className="resume-btn-container">
                    <button className="download-resume" onClick={openPdf}>DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;