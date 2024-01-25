import React, { useEffect, useState } from 'react';

import { ReactComponent as MeSVG } from '../../img/hi.svg';

import './About.scss';

const TextDisplay = () => {
  return (
    <>
      <div className="copy-wrapper">
        <h2>Hi! It's me, Bill!</h2>
        <p>
          I’ve been a creative professional for over twenty years,
          wearing many different hats ( not literally; I don’t like
          hats ) including{' '}
          <em>
            designer, illustrator, art director, creative director,
            creative technologist,
          </em>{' '}
          and <em> front-end developer</em>.
        </p>
        <p>
          I'm <em>available</em> for freelance and contract work.
        </p>
        <p>
          Here’s some points about my professional life, in bullet
          form for your convenience.
        </p>
        <h3>
          I've done this for a <span>long time</span>
        </h3>
        <ul className="about-list">
          <li className="icon-one">
            I remember when Notepad ++ came out
          </li>
          <li className="icon-one">
            When I first used Photoshop it was on version 8
          </li>
          <li className="icon-one">My first website was in Flash</li>
        </ul>
        <h3>
          I've done this for some <span>big names</span>
        </h3>
        <ul className="about-list">
          <li className="icon-two">
            I worked at Amazon and pushed code to the fourth most
            visited website on the internet
          </li>
          <li className="icon-two">
            Other clients and employers include Publicis Group,
            Goldman Sachs, Code & Theory, DC Comics, WWE, etc.
          </li>
        </ul>
        <p></p>
      </div>
      <MeSVG className="animate-svg-no-children" />
    </>
  );
};

export default TextDisplay;
