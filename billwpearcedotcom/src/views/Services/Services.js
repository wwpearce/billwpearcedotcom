import './Services.scss';

import { ReactComponent as ServicesScriptSVG } from '../../img/SVG_services-offered.svg';
import { ReactComponent as DesignAndIllustrationSVG } from '../../img/SVG_design-and-illustration.svg';
import { ReactComponent as WebDevelopmentSVG } from '../../img/SVG_web-development.svg';
import { ReactComponent as CreativeConsultingSVG } from '../../img/SVG_creative-consulting.svg';

const Services = () => {
  return (
    <div className="services-wrapper">
      <ServicesScriptSVG className="services-svg animate-svg" />
      <p>Here's what's on the table:</p>
      <div className="services-inner-wrapper">
        <div className="card card-one">
          <DesignAndIllustrationSVG className="services-headings-svg" />
          <ul>
            <li>Websites and webapps of all shapes and kinds!</li>
            <li>Logo and Identites</li>
            <li>Flyers</li>
            <li>Merch</li>
            <li>Interaction Design</li>
          </ul>
        </div>
        <div className="card card-two">
          <WebDevelopmentSVG className="services-headings-svg" />
          <ul>
            <li>Websites and webapps of all shapes and kinds!</li>
            <li>Custom development for Shopify/Squarespace/etc.</li>
            <li>Custom tools ( i.e. Figma Plugins )</li>
          </ul>
        </div>
        <div className="card card-three">
          <CreativeConsultingSVG className="services-headings-svg" />
          <ul>
            <li>Creative Direction</li>
            <li>Design systems</li>
            <li>Branding</li>
            <li>Design and Development process optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
