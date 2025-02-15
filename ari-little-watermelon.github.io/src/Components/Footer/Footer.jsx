import React from "react";
import './Footer.css';
import mailIcon from '../../assets/mail-icon.png';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-text-container">
                    <h2 className="like-my-style">Like my Style?</h2>
                    <div className="email-container">
                        <div className="email-link"><a href="mailto:little.watermelon.dev@gmail.com">little.watermelon.dev@gmail.com</a></div>
                        <div className="email-icon-container">
                            <img src={mailIcon} alt="Email"/>
                        </div>
                    </div>
                </div>
                <div className="socials-container">
                    <p className="social-link">
                        <a href="https://www.linkedin.com/in/arundhati-bandopadhyaya-519162191/">LinkedIn | <a href="https://github.com/arundhati-work">GitHub</a></a>
                    </p>
                </div>    
            </div>
            
        </div>
    )
}

export default Footer;