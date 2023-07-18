import React, { useState, useEffect } from 'react';
import './Navigation.scss';

const Navigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`sticky-nav ${isNavVisible ? 'visible' : ''}`}>
      <h1>nav</h1>
    </nav>
  );
};

export default Navigation;
