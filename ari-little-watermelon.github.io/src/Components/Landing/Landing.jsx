import React from 'react';
import './Landing.css';
import Navbar from '../Navbar/Navbar';
import photo from '../../assets/photo.png';
import locationPin from '../../assets/location-pin.png';

const Landing = () => {


    return (
        <div>
            <Navbar/>
            <div id="landing-container">
                <div className='landing-text-above'>
                    <p className='hi-im'>Hi I'm</p>
                    <h1 className='my-name'>Arundhati <br/> Bandopadhyaya</h1>
                    <h2 className='about-me'>I am a full-stack developer, I make web apps for work and fun ✨</h2>
                </div>
                <div className='landing-photo'>
                    <img src={photo} alt="Me"/>
                </div>
                <div className="location">
                    <img class="location-pin" src = {locationPin} alt="location"/>
                    <p className="location-text">Boston, MA</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;