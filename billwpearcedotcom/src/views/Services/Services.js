import './Services.scss';

import { ReactComponent as ServicesScriptSVG } from '../../img/SVG_services-offered.svg';
import { ReactComponent as DesignAndIllustrationSVG } from '../../img/SVG_design-and-illustration.svg';
import { ReactComponent as WebDevelopmentSVG } from '../../img/SVG_web-development.svg';
import { ReactComponent as CreativeConsultingSVG } from '../../img/SVG_creative-consulting.svg';

const Services = () => {
  return (
    <div className="services-wrapper">
      <ServicesScriptSVG className="services-svg animate-svg" />

      <div className="services-inner-wrapper services-row">
        <div className="card">
          <DesignAndIllustrationSVG className="services-headings-svg" />
          <ul>
            <li>Logos</li>
            <li>Websites and web apps</li>
            <li>Mobile apps</li>
            <li>Merch</li>
          </ul>
        </div>
        <div className="card">
          <WebDevelopmentSVG className="services-headings-svg" />
          <ul>
            <li>Websites (mostly front-end)</li>
            <li>Shopify Plugins</li>
            <li>Squarespace Plugins</li>
            <li>Figma Plugins</li>
          </ul>
        </div>
        <div className="card">
          <CreativeConsultingSVG className="services-headings-svg" />
          <ul>
            <li>Design organization optimization</li>
            <li>Process optimization</li>
            <li>Design systems</li>
            <li>Interaction design</li>
            <li>Branding</li>
            <li>Creative Direction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
