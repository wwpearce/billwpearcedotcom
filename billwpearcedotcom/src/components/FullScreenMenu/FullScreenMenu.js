import React, { useState, useLayoutEffect } from 'react';

import './FullScreenMenu.scss';

import { ReactComponent as AboutSVG } from '../../img/about.svg';
import { ReactComponent as ContactSVG } from '../../img/contact.svg';
import { ReactComponent as PortfolioSVG } from '../../img/portfolio.svg';
import { ReactComponent as ServicesSVG } from '../../img/services.svg';
import Services from '../../views/Services/Services';

const FullScreenMenu = ({ isOpen, onPress, toggleOpen }) => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  const handleItemTap = (e) => {
    onPress(e);
    toggleOpen();
  };

  return (
    <nav
      className={`fullscreen-menu ${
        isOpen && isMounted ? 'open' : ''
      }`}
    >
      <ul>
        <li>
          <a onClick={handleItemTap} href="#first">
            <div
              className="data-to-scrollspy"
              data-to-scrollspy-id="first"
            >
              <AboutSVG />
            </div>
          </a>
        </li>
        <li>
          <a onClick={handleItemTap} href="#second">
            <div
              className="data-to-scrollspy"
              data-to-scrollspy-id="second"
            >
              <ServicesSVG />
            </div>
          </a>
        </li>
        <li>
          <a onClick={handleItemTap} href="#third">
            <div
              className="data-to-scrollspy"
              data-to-scrollspy-id="third"
            >
              <PortfolioSVG />
            </div>
          </a>
        </li>
        <li>
          <a onClick={(e) => onPress(e)} href="www.google.com">
            <div>
              <ContactSVG />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FullScreenMenu;
