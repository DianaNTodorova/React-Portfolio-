import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="container-img">
          <img src={logo} alt="Logo" height={100} width={120}></img>
        </div>
        <div className="container-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
