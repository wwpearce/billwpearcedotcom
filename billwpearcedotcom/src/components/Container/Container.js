import React, { useState, useEffect } from 'react';
import ScrollSpy from 'react-ui-scrollspy';

import './Container.scss';

import Screen from '../Screen/Screen';
import Navigation from '../Navigation/Navigation';
import Portfolio from '../../views/Portfolio/Portfolio';
import About from '../../views/About/About';
import Services from '../../views/Services/Services';
import Contact from '../../views/Contact/Contact';
import Button from '../Button/Button';

import { ReactComponent as Hero } from '../../img/hero.svg';

function Container() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      // Clear the timeout if the user starts scrolling again
      clearTimeout(timeoutId);

      // Set a timeout to hide the navigation bar after 1 second of inactivity
      const newTimeoutId = setTimeout(() => {
        setIsScrolled(false);
      }, 5000);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    if (isOpen) {
      clearTimeout(timeoutId);
    } else if (timeoutId === null && isScrolled) {
      const newTimeoutId = setTimeout(() => {
        setIsScrolled(false);
      }, 5000);

      setTimeoutId(newTimeoutId);
    }
  }, [isOpen, timeoutId, isScrolled]);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleUpdateCallback = (e) => {
    const element = document.querySelector(`#${e}`);
    console.log(element);
    element.classList.add('scrolled');
  };

  return (
    <div className={`Container ${isScrolled ? 'scrolled' : ''}`}>
      <Navigation
        isScrolled={isScrolled}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        setOpen={setOpen}
      />
      <div
        className={`inner-wrapper ${isScrolled ? 'scrolled' : ''}`}
      >
        <ScrollSpy
          offsetBottom={100}
          scrollThrottle={80}
          useBoxMethod
          onUpdateCallback={handleUpdateCallback}
        >
          <Screen className="Splash" id="zero">
            <Hero className="hero-svg" />
            <div
              className="scroll-button"
              data-to-scrollspy-id="first"
            >
              <Button>
                <span>👇</span> Get to scrollin <span>👇</span>
              </Button>
            </div>
          </Screen>
          <Screen className="About" id="first">
            <About />
          </Screen>
          <Screen className="Services" id="second">
            <Services />
          </Screen>
          <Screen className="Portfolio" id="third">
            <Portfolio />
          </Screen>
          <Screen className="Contact" id="fourth">
            <Contact />
          </Screen>
        </ScrollSpy>
      </div>
    </div>
  );
}

export default Container;
