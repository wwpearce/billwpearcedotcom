import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import ScrollSpy from "react-ui-scrollspy";

import "./Container.scss";

import Screen from "../Screen/Screen";
import Navigation from "../Navigation/Navigation";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Services from "../Services/Services";

import { ReactComponent as Hero } from '../../img/hero.svg';

function Container() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Container ${isScrolled ? "scrolled" : ""}`}>
      <BrowserView>
        <DesktopNavigation isScrolled={isScrolled} />
      </BrowserView>
      <MobileView>
        <Navigation isScrolled={isScrolled} />
      </MobileView>
      <div className={`inner-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <ScrollSpy offsetTop={50} useBoxMethod={false}>
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="Screen white splash"
            id="zero"
          >
            <Hero className="hero-svg" />
          </Screen>
          <Screen
            backgroundColor="#000"
            layoutType="center"
            className="Screen black about"
            id="first"
          >
            <About />
          </Screen>
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="Screen white services"
            id="second"
          >
            <Services />
          </Screen>
          <Screen
            backgroundColor="#000"
            layoutType="center"
            className="Screen black portfolio"
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
