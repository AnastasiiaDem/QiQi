import React, {useEffect, useState} from 'react';

const FlyingBalls = () => {
  const [ballPositions, setBallPositions] = useState(() =>
    Array.from({length: 400}, (_, index) => ({
      id: index + 1,
      initialPosition: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    }))
  );
  
  const calculateDistance = (point1, point2) => {
    return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
  };
  
  const handleMouseEnter = (hoveredPosition) => {
    setBallPositions((prevPositions) =>
      prevPositions.map(({id, initialPosition, position}) => {
        const distance = calculateDistance(hoveredPosition, position);
        
        if (distance < 100) {
          const newX = initialPosition.x + Math.random() * 100 - 50;
          const newY = initialPosition.y + Math.random() * 100 - 50;
          
          return {
            id,
            initialPosition,
            position: {
              x: Math.max(0, Math.min(window.innerWidth, newX)),
              y: Math.max(0, Math.min(window.innerHeight, newY)),
            },
          };
        }
        
        return {id, initialPosition, position};
      })
    );
  };
  
  useEffect(() => {
    const resetPositions = () => {
      setBallPositions((prevPositions) =>
        prevPositions.map(({id, initialPosition}) => ({
          id,
          initialPosition,
          position: initialPosition
        }))
      );
    };
    
    const timeoutId = setTimeout(resetPositions, 2000);
    
    return () => clearTimeout(timeoutId);
    
  }, [ballPositions]);
  
  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter({x: e.clientX, y: e.clientY});
      }}
    >
      
      {ballPositions.map(({id, position}) => (
        <img
          key={id}
          src={require('../assets/583f133fa0b6e672a83f306d1dd4750744.svg').default}
          className="ball"
          style={{
            height: '30px',
            width: '30px',
            transform: `translate3d(${position.x}px, ${position.y}px, 0.001px)`,
          }}
          alt={`Flying ball ${id}`}
        />
      ))}
    </div>
  );
};

export default FlyingBalls;
