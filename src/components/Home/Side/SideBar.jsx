import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="SideBar">
      
      <button className="btn btn-primary m-3" onClick={() => setShow(true)}>
        ☰ Filters
      </button>

      <div className={`offcanvas offcanvas-start ${show ? "show" : ""}`} tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filters</h5>
          <button className="btn-close" onClick={() => setShow(false)}></button>
        </div>
        <div className="offcanvas-body">
          <h3>Delivery Day</h3>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="delivery1" />
            <label className="form-check-label" htmlFor="delivery1">Get It in 2 Days</label>
          </div>

          <h3 className="mt-3">Customer Reviews</h3>
          <p className="text-warning">⭐⭐⭐⭐ & up</p>

          <h3 className="mt-3">Brands</h3>
          {["Samsung", "LG", "Haier", "Daikin"].map((brand, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input" type="radio" name="brand" id={brand} />
              <label className="form-check-label" htmlFor={brand}>{brand}</label>
            </div>
          ))}

          <h3 className="mt-3">Price</h3>
          {["All", "₹5900 to ₹10,000", "₹10,000 to ₹20,000"].map((price, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input" type="radio" name="price" id={price} />
              <label className="form-check-label" htmlFor={price}>{price}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
