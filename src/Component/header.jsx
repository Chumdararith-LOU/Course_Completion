import itc_logo from '../assets/itc-logo.png';
import Ornamental_Rule1 from '../assets/Ornamental Rule.png';
import Gic_logo from '../assets/GIC.png';

export default function Header() {
  return (
    <header className="certificate-header">
      <div className="header-left">
        <img src={itc_logo} alt="ITC Logo" className="header-logo" />
        <p className="institute-name">Institute of Technology of Cambodia</p>
      </div>

      <div className="header-center">
        <p className="kingdom-name">Kingdom of Cambodia</p>
        <p className="motto">Nation, Religion, King</p>
        <img
          src={Ornamental_Rule1}
          alt="Ornamental Rule"
          id="Ornamental-Rule"
        />
      </div>

      <div className="header-right">
        <img
          src={Gic_logo}
          alt="GIC Department Logo"
          className="department-logo"
        />
        <div className="department-name">
          Department of Information and Communication Engineering
        </div>
      </div>
    </header>
  );
}
