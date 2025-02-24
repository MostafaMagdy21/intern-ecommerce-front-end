import React from "react";
import logo from "../../assets/AmazonLogo.svg";
import { BiCart } from "react-icons/bi";
import { CiLocationOn, CiSearch } from "react-icons/ci";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="Amazon Logo" width="100" />
      </a>
      <div className="navbar-text ms-2" style={{ color: "#C0CCCC" }}>
        Delivering to Surat 394210 <br />
        <a href="#" className="text-white fw-bold text-decoration-none">
          <CiLocationOn size={30} /> Update location
        </a>
      </div>
      <form className="d-flex flex-grow-1 mx-3 ">
        <select className="form-select w-auto rounded-end-0 bg-body-secondary ">
          <option>All</option>
        </select>
        <input
          className="form-control rounded-0 p-3"
          type="search"
          placeholder="Search Amazon.in"
          aria-label="Search"
        />
        <button className="btn btn-warning rounded-start-0" type="submit">
          <CiSearch size={30} />
        </button>
      </form>

      <div className="dropdown me-3 ">
        <button
          className="btn text-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          EN
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item ">English</li>
          <li className="dropdown-item">Arabic</li>
        </ul>
      </div>
      <div className="text-white me-3">
        Hello, sign in <br />
        <a href="#" className="text-white fw-bold text-decoration-none">
          Account & Lists
        </a>
      </div>
      <div className="text-white me-3">
        Returns <br />
        <a href="#" className="text-white fw-bold text-decoration-none">
          & Orders
        </a>
      </div>
      <a className="nav-link text-white " href="#">
        <BiCart size={40} /> Cart
      </a>
    
    </nav>
  );
};

export default TopNavbar;
