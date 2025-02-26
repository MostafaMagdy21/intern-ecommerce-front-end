import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import styles
import { addToCart } from "../../redux/cartSlice";
import { addToFav } from "../../redux/favSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const { favItems } = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load product. Please try again.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      setQuantity(1); 
      toast.success(`${quantity} item(s) added to cart! `, { autoClose: 2000 });
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // Prevent negative or zero values
  };

  const handleAddToFavorites = () => {
    if (product) {
      dispatch(addToFav(product));
      toast.success(`${product.title} added to favorites `, { autoClose: 2000 });
    }
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-5 text-danger">{error}</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-5 text-danger">Product not found!</h2>;
  }

  return (
    <div className="container my-4">
      <ToastContainer position="top-center" autoClose={2000} /> 
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid w-50" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-danger">₹{product.price}</h4>
          <div className="product-rating">
            4.1 ★★★★☆ 67 ratings | <a href="#reviews">Search this page</a>
          </div>
          <div className="product-discount mt-3">
            <p>Sign in to redeem: Extra 20% off with mean credit cards.</p>
            <p>Enter code <strong>MEEM20</strong> at checkout. Discount by Amazon.</p>
          </div>
          <div className="payment-info mt-3">
            <p>Electronic payment Only</p>
            <p>30 days Returnable</p>
            <p>Secure transaction</p>
          </div>
          <div className="product-about mt-3">
            <h3>About this item</h3>
            <p>{product.description}</p>
            <ul>
              <li>Feature: square neck, cutout, puff sleeve, ruffle hem, tie back aline dress</li>
              <li>Fabric has some stretch, and it’s soft and comfortable</li>
              <li>Suitable for daily wear, holidays, dating, vacation, weekend casual</li>
              <li>Care Instructions: Machine wash or professional dry clean</li>
            </ul>
          </div>
          <div className="product-delivery mt-3">
            <p>Delivery to Riyadh - Update Location</p>
            <p>Usually ships within 4 to 5 days</p>
          </div>
          <div className="product-quantity mt-3">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="product-actions mt-3">
            <button className="btn btn-warning me-2" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className="btn btn-danger">Buy Now</button>
          </div>
          <div className="seller-info mt-3">
            <p>Ships from Solo by Payment</p>
            <p>Monatik LLC Monatik LLC Secure transaction</p>
          </div>
          <div className="add-to-list mt-3">
            <button className="btn btn-outline-secondary" onClick={handleAddToFavorites}>
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
