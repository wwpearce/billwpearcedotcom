import React, { useState, useEffect } from "react";
import "./DesktopNavigation.scss";
import ScrollSpy from "react-ui-scrollspy";


const DesktopNavigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`sticky-nav ${isNavVisible ? "visible" : ""}`}>
        <div className="nav-item">
          <p data-to-scrollspy-id="second">about</p>
        </div>
        <div className="nav-item">
        <h1 data-to-scrollspy-id="third">services</h1>
        </div>
        <div className="nav-item">
          <h1>logo</h1>
        </div>
        <div className="nav-item">
        <h1 data-to-scrollspy-id="fourth">portfolio</h1>
        </div>
        <div className="nav-item">
        <h1>contact</h1>
        </div>
    </nav>
  );
};

export default DesktopNavigation;
