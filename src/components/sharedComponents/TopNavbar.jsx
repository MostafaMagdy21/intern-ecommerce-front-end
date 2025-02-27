import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/AmazonLogo.svg";
import { BiCart } from "react-icons/bi";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const TopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const {favItems} = useSelector((state) => state.fav);
  const {cartItems} = useSelector((state) => state.cart);

  useEffect(() => {
    if (searchQuery.trim()) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSuggestions(filtered);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(`/product/${suggestions[0].id}`);
      setSearchQuery("");
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (id) => {
    navigate(`/product/${id}`);
    setSearchQuery("");
    setSuggestions([]);
  };

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
      <form className="d-flex flex-grow-1 mx-3 position-relative" onSubmit={handleSearch}>
        <select className="form-select w-auto rounded-end-0 bg-body-secondary">
          <option>All</option>
        </select>
        <input
          className="form-control rounded-0 p-3"
          type="search"
          placeholder="Search Amazon.in"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-warning rounded-start-0" type="submit">
          <CiSearch size={30} />
        </button>
        {suggestions.length > 0 && (
          <ul className="list-group position-absolute w-100  bg-white shadow overflow-y-scroll" style={{marginTop: '55px', zIndex: 10 ,height: '200px'}}>
            {suggestions.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleSuggestionClick(item.id)} style={{ cursor: 'pointer' }}>
                <p>{item.title}</p>
                <img src={item.image}  width="30" />
              </li>
            ))}
          </ul>
        )}
      </form>

      <div className="dropdown me-3">
        <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown">
          EN
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">English</li>
          <li className="dropdown-item">Arabic</li>
        </ul>
      </div>
      <div className="text-white me-3">
        Hello, sign in <br />
        <a href="/register" className="text-white fw-bold text-decoration-none">
          Account & Lists
        </a>
      </div>
      <div className="text-white me-3">
        Returns <br />
        <a href="#" className="text-white fw-bold text-decoration-none">
          & Orders
        </a>
      </div>
      <a href="/wishlist" className="position-relative">
  <FaRegHeart className="text-white me-3" size={30} />
  {favItems?.length > 0 && (
    <span style={{ fontSize: "10px" , top: '-3px', padding: '2px 5px'}} className=" bg-danger text-white position-absolute start-50 translate-middle rounded-3">
      {favItems.length}
    </span>
  )}
</a>
     
      <a className="nav-link text-white position-relative" href="/cart">
        <BiCart size={40} /> Cart
        {cartItems?.length > 0 && (
          <span style={{ fontSize: "10px" , top: '5px', right: '25px', padding: '2px 5px'}} className=" bg-danger text-white position-absolute  translate-middle rounded-3">
            {cartItems.length}
          </span>
        )}
      </a>
    </nav>
  );
};

export default TopNavbar;
