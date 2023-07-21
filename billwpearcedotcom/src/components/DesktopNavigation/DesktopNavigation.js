import React, { useState, useEffect } from "react";
import "./DesktopNavigation.scss";

import { ReactComponent as Logo } from '../../img/SVG_umbrella.svg';

import { ReactComponent as AboutSVG } from '../../img/about.svg';
import { ReactComponent as ContactSVG } from '../../img/contact.svg';
import { ReactComponent as PortfolioSVG } from '../../img/portfolio.svg';
import { ReactComponent as ServicesSVG } from '../../img/services.svg';

const DesktopNavigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`sticky-nav ${isNavVisible ? "visible" : ""}`}>
        <div className="nav-item about scroll_spy">
          <a onClick={(e) => onPress(e)} href="#first">
            <div className="data-to-scrollspy" data-to-scrollspy-id="first">
              <AboutSVG />
            </div>
          </a>
        </div>
        <div className="nav-item services scroll_spy">
          <a onClick={(e) => onPress(e)} href="#second">
            <div className="data-to-scrollspy" data-to-scrollspy-id="second">
              <ServicesSVG />
            </div>
          </a>
        </div>
        <div className="nav-item logo">
          <Logo />
        </div>
        <div className="nav-item portfolio scroll_spy">
          <a onClick={(e) => onPress(e)} href="#third">
            <div className="data-to-scrollspy" data-to-scrollspy-id="third">
              <PortfolioSVG />
            </div>
          </a>
        </div>
        <div className="nav-item portfolio">
          <a onClick={(e) => onPress(e)} href="www.google.com">
            <div>
              <ContactSVG />
            </div>
          </a>
        </div>
    </nav>
  );
};

export default DesktopNavigation;
