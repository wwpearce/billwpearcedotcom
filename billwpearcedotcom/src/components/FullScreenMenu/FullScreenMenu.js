import React, { useState, useLayoutEffect } from 'react';

import './FullScreenMenu.scss';

const FullScreenMenu = ({
  isOpen,
  AboutSVG,
  ServicesSVG,
  PortfolioSVG,
  ContactSVG,
  onPress,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    console.log(isMounted);
  }, []);

  return (
    <nav
      className={`fullscreen-menu ${
        isOpen && isMounted ? 'open' : ''
      }`}
    >
      <ul>
        <li>
          <a onClick={(e) => onPress(e)} href="#first">
            <div
              className="data-to-scrollspy"
              data-to-scrollspy-id="first"
            >
              [AboutSVG]
            </div>
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default FullScreenMenu;
