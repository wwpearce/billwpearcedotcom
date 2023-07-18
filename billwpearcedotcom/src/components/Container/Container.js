import './Container.scss';
import Splash from '../screens/Splash/Splash';
import About from '../screens/About/About';
import Services from '../screens/Services/Services';
import Portfolio from '../screens/Portfolio/Portfolio';

function Container() {
  return (
    <div className="Container">
      <Splash />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default Container;
