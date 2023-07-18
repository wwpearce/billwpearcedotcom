import React, { useState, useEffect } from "react";
import "./Container.scss";

import Screen from "../Screen/Screen";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";

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
      <Navigation isScrolled={isScrolled} />
      <div className={`inner-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <Screen
          backgroundColor="#fff"
          layoutType="center"
          className="Screen white splash"
        >
          <Card headline="Splash" bodyCopy="bodycopy" />
        </Screen>
        <Screen
          backgroundColor="#000"
          layoutType="center"
          className="Screen black about"
        >
          <Card headline="About" bodyCopy="bodycopy" />
        </Screen>
        <Screen
          backgroundColor="#fff"
          layoutType="center"
          className="Screen white services"
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
        >
          <Card headline="Portfolio" bodyCopy="bodycopy" />
        </Screen>
      </div>
    </div>
  );
}

export default Container;
