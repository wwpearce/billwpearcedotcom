import React, { useState, useEffect } from 'react';
import './Container.scss';

import Screen from '../Screen/Screen';
import Navigation from '../Navigation/Navigation';
import Card from '../Card/Card';

import Splash from '../screens/Splash/Splash';
import About from '../screens/About/About';
import Services from '../screens/Services/Services';
import Portfolio from '../screens/Portfolio/Portfolio';

function Container() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition >= viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Container ${isScrolled ? 'scrolled' : ''}`}>
      <Navigation isScrolled={isScrolled} />
      <div className={`inner-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <Screen backgroundColor="#fff" layoutType="center" className="custom-screen Splash">
          <Card headline="Splash" bodyCopy="bodycopy" />
        </Screen>
        <Screen backgroundColor="#000" layoutType="center" className="custom-screen">
          <Card headline="About" bodyCopy="bodycopy" />
        </Screen>
        <Services />
        <Screen backgroundColor="#000" layoutType="center" className="custom-screen">
          <Card headline="Portfolio" bodyCopy="bodycopy" />
        </Screen>
      </div>
    </div>
  );
}

export default Container;
