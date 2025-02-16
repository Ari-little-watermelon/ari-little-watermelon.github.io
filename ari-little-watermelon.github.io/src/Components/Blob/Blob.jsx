import React, { useState, useEffect } from 'react';
import './Blob.css';
import { techs } from '../../assets/techs';

const generateBlobPath = () => {
  const points = 24;
  const centerX = 50;
  const centerY = 50;
  const baseRadius = 30;
  const variance = 1.5;
  
  const angles = Array.from({ length: points }, (_, i) => {
    return (i * 2 * Math.PI) / points;
  });

  const blobPoints = angles.map(angle => {
    const radius = baseRadius + (Math.random() * variance - variance / 2);
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  let path = `M ${blobPoints[0].x},${blobPoints[0].y}`;
  
  blobPoints.forEach((point, i) => {
    const next = blobPoints[(i + 1) % points];
    
    const controlPoint1 = {
      x: point.x + (next.x - point.x) * 0.33,
      y: point.y + (next.y - point.y) * 0.33
    };
    
    const controlPoint2 = {
      x: point.x + (next.x - point.x) * 0.66,
      y: point.y + (next.y - point.y) * 0.66
    };

    path += ` C ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${next.x},${next.y}`;
  });

  return path + ' Z';
};

const Blob = ({ 
  defaultColor = '#2A2A2A',
  hoverColor = '#764ABC',
  imageSrc,
  text,
  animationClass = 'float-animation',
  className = '',
  desktopPosition,
  tabletPosition,
  monitorPosition
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [blobPath, setBlobPath] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setBlobPath(generateBlobPath());
  }, []);

  const getPosition = () => {
    if (screenWidth <900) {
      return tabletPosition;
    } else if (screenWidth < 1200) {
      return desktopPosition;
    } else {
      return monitorPosition;
    }
  };

  const position = getPosition();

  return (
    <div 
      className={`blob-container ${animationClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x
      }}
    >
      <div className="blob-wrapper blob-outer-glow">
        <svg
          viewBox="0 0 100 100"
          className="blob-svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="outer-glow">
              <feGaussianBlur stdDeviation="3" result="glow"/>
              <feComposite
                in="glow"
                in2="SourceGraphic"
                operator="over"
                result="glowComposite"
              />
            </filter>
          </defs>

          <path
            d={blobPath}
            style={{ 
              fill: 'none',
              stroke: '#515151',
              strokeWidth: '1',
              opacity: 0.2,
              filter: 'url(#outer-glow)'
            }}
          />

          <path
            d={blobPath}
            className="blob-path"
            style={{ 
              fill: 'none',
              stroke: isHovered ? hoverColor : '#515151',
              strokeWidth: '1',
              filter: 'url(#glow)',
              opacity: 0.4
            }}
          />

          <path
            d={blobPath}
            className="blob-path"
            style={{ 
              fill: defaultColor,
              stroke: isHovered ? hoverColor : '#515151',
              strokeWidth: '3',
            }}
          />
        </svg>

        <div className="blob-icon-container">
          <img 
            src={imageSrc} 
            alt={text} 
            className="blob-icon"
          />
        </div>

        <div className={`blob-label ${isHovered ? 'visible' : ''}`} style={{ color: hoverColor }}>
            {text}
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      {techs.map((tech) => (
        <Blob 
          key={tech.name}
          defaultColor="#2A2A2A"
          hoverColor={tech.color}
          imageSrc={tech.image}
          text={tech.name}
          animationClass={tech.animationClass}
          className={tech.className}
          desktopPosition={tech.desktopPosition}
          tabletPosition={tech.tabletPosition}
          monitorPosition={tech.monitorPosition}
        />
      ))}
    </div>
  );
};

export default TechStack;