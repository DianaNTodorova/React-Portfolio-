import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProjects = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <div className="container" style={{ backgroundColor: '#08002e' }}>
        <div className="container-img">
          <img
            src={logo}
            alt="Logo"
            height={100}
            width={120}
            style={{ backgroundColor: '#08002e' }}
          ></img>
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
            <button onClick={goToProjects} style={{ all: 'unset', cursor: 'pointer',}}>
             Projects
            </button>
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
