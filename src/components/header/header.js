import logo from "../../assets/log.png";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header container pt-4">
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark   text-white">
        <div className="container-fluid navpos">
          {/* Logo */}
          <Link className="navbar-brand   logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/features">
                  Features
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/platform">
                  Platform
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testimonials">
                  Testimonials
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

    </header>
  );
}

export default Header;
