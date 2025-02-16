import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollComponent from './Components/ScrollComponent/ScrollComponent';
import Navbar from './Components/Navbar/Navbar';
import {LoadingScreen} from './Components/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      const totalImages = images.length;
      let loadedImages = 0;

      function imageLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
          // Add a minimum loading time of 1.5 seconds for the animation
          setTimeout(() => setIsLoading(false), 1500);
        }
      }

      if (totalImages === 0) {
        setTimeout(() => setIsLoading(false), 1500);
        return;
      }

      Array.from(images).forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });
    };

    const timeoutId = setTimeout(checkImagesLoaded, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationComplete = () => {
    setShowLoader(false);
  };

  return (
    <div id="screen">
      {showLoader && (
        <LoadingScreen 
          isLoading={isLoading} 
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      <Navbar />
      <ScrollComponent />
    </div>
  );
}

export default App;