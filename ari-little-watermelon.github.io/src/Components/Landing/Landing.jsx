import React from 'react';
import './Landing.css';
import Navbar from '../Navbar/Navbar';
import photo from '../../assets/photo.png';
import locationPin from '../../assets/location-pin.png';
import Blob from '../Blob/Blob';

const Landing = () => {

            {/* <Navbar/> */}
    return (

            <div className="landing-container">
                <div className='landing-inner-container'>
                <div className='landing-text-above'>
                <Blob 
                    defaultColor="#2A2A2A"
                    hoverColor="#764ABC"
                    imageSrc="/path-to-icon.png"
                    text="Technology Name"
                    animationClass="float-animation"
                />
                    <p className='hi-im'>Hi I'm</p>
                    <h1 className='my-name'>Arundhati <br/> Bandopadhyaya</h1>
                    <h2 className='about-me'>I am a full-stack developer, I make web apps for work and fun ✨</h2>
                </div>
                <div className='landing-photo'>
                    <img src={photo} alt="Me"/>
                </div>
                <div className="location">
                    <div className='location-img'><img className="location-pin" src = {locationPin} alt="location"/></div>
                    <p className="location-text">Boston, MA</p>
                </div>
                </div>
                
            </div>
    )
}

export default Landing;