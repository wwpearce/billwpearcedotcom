import React, { useState, useEffect } from "react";
import "./Navigation.scss";

const Navigation = ({ isScrolled }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`sticky-nav ${isNavVisible ? "visible" : ""}`}>
        <div className="nav-item">
          <h1>burger</h1>
        </div>
        <div className="nav-item">
          <h1>logo</h1>
        </div>
    </nav>
  );
};

export default Navigation;
