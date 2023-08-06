import React, { useEffect, useState } from 'react';

import { ReactComponent as MeSVG } from '../../img/hi.svg';

import './About.scss';

const TextDisplay = () => {
  return (
    <div className="About">
      <div className="copy-wrapper">
        <h2>Hi! It's me, Bill!</h2>
        <p>
          I’ve been a creative professional for over twenty years,
          wearing many different hats (not literally; I don’t like
          hats) including designer, illustrator, creative director,
          creative technologist, and front-end developer.
        </p>
        <h3>
          I've done this for a <span>long time</span>
        </h3>
        <ul className="about-list">
          <li>I remember when Notepad ++ came out</li>
          <li>When I first used Photoshop it was on version 8</li>
          <li>My first website was in Flash</li>
        </ul>
        <h3>
          I've done this for some <span>big names</span>
        </h3>
        <ul className="about-list">
          <li>
            I worked at Amazon and pushed code to the fourth most
            visited website on the internet
          </li>
          <li>
            Other clients and employers include Publicis Group,
            Goldman Sachs, Code & Theory, DC Comics, WWE, etc.
          </li>
        </ul>
        <p></p>
        <ul className="about-list">
          <li>Tea Lady - Creative Director</li>
          <li>
            Secret Football Club - Contributing Designer (and striker)
          </li>
        </ul>
      </div>
      <MeSVG className="animate-svg" />
    </div>
  );
};

export default TextDisplay;
