import React, { useState, useEffect } from "react";
import "./Navigation.scss";

import { ReactComponent as Logo } from '../../img/SVG_umbrella.svg';
import Hamburger from 'hamburger-react'

const Navigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`mobile-sticky-nav ${isNavVisible ? "visible" : ""}`}>
        <div className="nav-item mobile-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="nav-item mobile-logo">
          <Logo />
        </div>
    </nav>
  );
};

export default Navigation;
