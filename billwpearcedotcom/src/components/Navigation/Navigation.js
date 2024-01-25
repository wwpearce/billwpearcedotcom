import React, { useState, useEffect } from 'react';
import { isMobile, isDesktop } from 'react-device-detect';
import Hamburger from 'hamburger-react';

import FullScreenMenu from '../FullScreenMenu/FullScreenMenu';

import './Navigation.scss';

import { ReactComponent as Logo } from '../../img/SVG_umbrella.svg';

import { ReactComponent as AboutSVG } from '../../img/about.svg';
import { ReactComponent as ContactSVG } from '../../img/contact.svg';
import { ReactComponent as PortfolioSVG } from '../../img/work.svg';
import { ReactComponent as ServicesSVG } from '../../img/services.svg';

const Navigation = ({
  isScrolled,
  isOpen,
  toggleOpen,
  setOpen,
  onPress,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <>
      {isMobile && (
        <div className="hamburger-menu">
          <nav
            className={`mobile-sticky-nav ${
              isNavVisible ? 'visible' : ''
            }`}
          >
            <div className="nav-item mobile-hamburger">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="nav-item mobile-logo">
              <Logo />
            </div>
          </nav>
          <FullScreenMenu
            toggleOpen={toggleOpen}
            isOpen={isOpen}
            AboutSVG={AboutSVG}
            ContactSVG={ContactSVG}
            PortfolioSVG={PortfolioSVG}
            ServicesSVG={ServicesSVG}
            onPress={onPress}
          />
        </div>
      )}
      {isDesktop && (
        <nav
          className={`desktop-sticky-nav ${
            isNavVisible ? 'visible' : ''
          }`}
        >
          <div className="nav-item about scroll_spy">
            <a onClick={(e) => onPress(e)} href="#first">
              <div
                className="data-to-scrollspy"
                data-to-scrollspy-id="first"
              >
                <AboutSVG />
              </div>
            </a>
          </div>
          <div className="nav-item services scroll_spy">
            <a onClick={(e) => onPress(e)} href="#second">
              <div
                className="data-to-scrollspy"
                data-to-scrollspy-id="second"
              >
                <ServicesSVG />
              </div>
            </a>
          </div>
          <div className="nav-item logo">
            <a onClick={(e) => onPress(e)} href="#zero">
              <div
                className="data-to-scrollspy"
                data-to-scrollspy-id="zero"
              >
                <Logo />
              </div>
            </a>
          </div>
          <div className="nav-item portfolio scroll_spy">
            <a onClick={(e) => onPress(e)} href="#third">
              <div
                className="data-to-scrollspy"
                data-to-scrollspy-id="third"
              >
                <PortfolioSVG />
              </div>
            </a>
          </div>
          <div className="nav-item contact scroll_spy">
            <a onClick={(e) => onPress(e)} href="#fourth">
              <div
                className="data-to-scrollspy"
                data-to-scrollspy-id="fourth"
              >
                <ContactSVG />
              </div>
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
