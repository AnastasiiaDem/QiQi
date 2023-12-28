import React, { useEffect, useState } from 'react';

const Parallax = ({ imageSrc, className, height, speed }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const translateY = -scrollPosition * ( speed || 0.1);
  
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: height || '1000px',
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.5s ease-out',
      }}
    />
  );
};

export default Parallax;
