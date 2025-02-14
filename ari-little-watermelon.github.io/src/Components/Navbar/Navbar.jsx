import React from "react";
import './Navbar.css';

const Navbar = () => {

    return(
        <div id='navbar-container'>
            <div className='logo-container'>
            </div>
            <div className="resume-btn-container">
                <button className="download-resume">DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}

export default Navbar;