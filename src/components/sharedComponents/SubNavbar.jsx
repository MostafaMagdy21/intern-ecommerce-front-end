import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SubNavbar = () => {
  return (
    <nav id="subnav" className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <span className="d-none d-lg-inline text-white me-2">
          <span className="navbar-toggler-icon"></span>
        </span>

        <a className="navbar-brand" href="#">
          All
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Amazon mini TV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Best Sellers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Today's Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobiles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Customer Service
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prime
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Prime Video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Prime Music
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fashion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Releases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home & Kitchen
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Amazon Pay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
