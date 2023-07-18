import React, { useState, useEffect } from "react";
import "./DesktopNavigation.scss";

const Navigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`sticky-nav ${isNavVisible ? "visible" : ""}`}>
      <ul>
        <li>
          <h1>about</h1>
        </li>
        <li>
          <h1>services</h1>
        </li>
        <li>
          <h1>logo</h1>
        </li>
        <li>
          <h1>about</h1>
        </li>
        <li>
          <h1>services</h1>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
