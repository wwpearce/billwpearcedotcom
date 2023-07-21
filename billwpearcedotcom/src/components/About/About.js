import React, { useEffect, useState } from 'react';

import { ReactComponent as MeSVG } from '../../img/me.svg';

import './About.scss';

const TextDisplay = () => {
    return (
        <div className='About'>
            <div className='copy-wrapper'>
            <h2>Here is my professional life, in bullet form:</h2>
            <br />
            <ul className='about-list'>
                <li>20 years of experience in design, illustration, and front-end development (read: Photoshop 7, Illustrator 10, and Notepad++)</li>
                <li>Senior level titles in design, front-end development, and creative technology at Code and Theory, Amazon, Publicis, and Goldman Sachs while maintaining a freelance design and illustration practice</li>
                <li>I’ve done every project under the sun: the regular stuff (logos, websites, ads, merch), the big stuff (enterprise level applications, Amazon.com), the weird stuff (Arduino, Alexa)</li>
                <li>Steady hand: pushed code to the fourth most-visited website on the internet (done a few public speaking engagements too)</li>
                <li>Always optimizing: my job at GS was to optimize a design team through tooling and process</li>
                <li>Industries include advertising, fintech, design consulting, creative services, blah blah</li>
            </ul>
            </div>
            <MeSVG />
        </div>
    );
};

export default TextDisplay;
