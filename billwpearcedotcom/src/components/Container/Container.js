import React, { useState, useEffect } from 'react';
import ScrollSpy from 'react-ui-scrollspy';

import './Container.scss';

import Screen from '../Screen/Screen';
import Navigation from '../Navigation/Navigation';
import Portfolio from '../../views/Portfolio/Portfolio';
import About from '../../views/About/About';
import Services from '../../views/Services/Services';

import { ReactComponent as Hero } from '../../img/hero.svg';

function Container() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUpdateCallback = (e) => {
    const element = document.querySelector(`#${e}`);
    console.log(element);
    element.classList.add('scrolled');
  };

  return (
    <div className={`Container ${isScrolled ? 'scrolled' : ''}`}>
      <Navigation isScrolled={isScrolled} />
      <div
        className={`inner-wrapper ${isScrolled ? 'scrolled' : ''}`}
      >
        <ScrollSpy
          offsetTop={50}
          useBoxMethod={false}
          onUpdateCallback={handleUpdateCallback}
        >
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="white Splash"
            id="zero"
          >
            <Hero className="hero-svg" />
          </Screen>
          <Screen
            backgroundColor="#000"
            layoutType="center"
            className="black About"
            id="first"
          >
            <About />
          </Screen>
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="white Services"
            id="second"
          >
            <Services />
          </Screen>
          <Screen
            backgroundColor="#000"
            layoutType="center"
            className="black Portfolio"
            id="third"
          >
            <Portfolio />
          </Screen>
        </ScrollSpy>
      </div>
    </div>
  );
}

export default Container;
