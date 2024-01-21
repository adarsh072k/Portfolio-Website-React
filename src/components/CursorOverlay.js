
import React, { useState, useEffect } from 'react';
import '../index.css'; // Import the corresponding CSS file

const CursorOverlay = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="cursor-overlay" style={{ left: position.x, top: position.y }}></div>
  );
};

export default CursorOverlay;
