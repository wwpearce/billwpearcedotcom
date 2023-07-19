import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import ScrollSpy from "react-ui-scrollspy";

import "./Container.scss";

import Screen from "../Screen/Screen";
import Navigation from "../Navigation/Navigation";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import Portfolio from "../Portfolio/Portfolio";

import { ReactComponent as Logo } from '../../img/logo.svg';

function Container() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition >= viewportHeight);
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
        <ScrollSpy offsetTop={0} useBoxMethod={false}>
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="Screen white splash"
            id="zero"
          >
            <Logo />
          </Screen>
          <Screen
            backgroundColor="#000"
            layoutType="center"
            className="Screen black about"
            id="first"
          >
            <Card headline="About" bodyCopy="bodycopy" />
          </Screen>
          <Screen
            backgroundColor="#fff"
            layoutType="center"
            className="Screen white services"
            id="second"
          >
            <Grid>
              <GridItem>
                <Card headline="service" bodyCopy="service copy" />
              </GridItem>
              <GridItem isMiddle>
                <Card headline="service" bodyCopy="service copy" />
              </GridItem>
              <GridItem>
                <Card headline="service" bodyCopy="service copy" />
              </GridItem>
            </Grid>
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
