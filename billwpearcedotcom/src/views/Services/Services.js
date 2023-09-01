import './Services.scss';

import { ReactComponent as ServicesScriptSVG } from '../../img/SVG_services-offered.svg';
import { ReactComponent as DesignAndIllustrationSVG } from '../../img/design-and-illustration-v2.svg';
import { ReactComponent as WebDevelopmentSVG } from '../../img/web-development-v2.svg';
import { ReactComponent as CreativeConsultingSVG } from '../../img/creative-consulting-v2.svg';

const Services = () => {
  return (
    <div className="services-wrapper">
      <ServicesScriptSVG className="services-svg animate-svg script-svg" />
      <p>Here's what's on the table:</p>
      <div className="services-inner-wrapper">
        <div className="card card-one">
          <DesignAndIllustrationSVG className="services-headings-svg" />
          <ul>
            <li>Websites</li>
            <li>Logos</li>
            <li>Identities</li>
            <li>Flyers</li>
            <li>Merch</li>
            <li>Interaction Design</li>
            <li>Pattern Making</li>
            <li>Hand Lettering</li>
            <li>Screen Printing</li>
          </ul>
        </div>
        <div className="card card-two">
          <WebDevelopmentSVG className="services-headings-svg" />
          <ul>
            <li>Websites</li>
            <li>Web Apps</li>
            <li>Shopify</li>
            <li>Squarespace</li>
            <li>Figma Plugins</li>
          </ul>
        </div>
        <div className="card card-three">
          <CreativeConsultingSVG className="services-headings-svg" />
          <ul>
            <li>Creative Direction</li>
            <li>Design systems</li>
            <li>Branding</li>
            <li>Ecommerce</li>
            <li>Creative Process Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
