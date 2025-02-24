import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AllProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    function getAllProducts() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        style={{ cursor: "pointer" }} 
                    >
                        <div className="card h-100 d-flex flex-column">
                            <img
                                src={product.image}
                                className="card-img-top p-3 "
                                alt={product.title}
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column flex-grow-1 text-start p-2">
                                <h6 className="card-title">{product.title}</h6>
                                <p className="review text-primary">
                                    ⭐⭐⭐⭐ <img src={icon} alt="icon" style={{ width: "15px" }} /> {product.rating.count}
                                </p>
                                <p className="text-secondary">300+ bought in past month</p>
                                <h5 className="price">
                                    ₹{product.price}{" "}
                                    <small className="text-muted">
                                        <del>₹{(product.price * 1.2).toFixed(2)}</del>
                                    </small>
                                </h5>
                                <p className="text-secondary">Save extra with No Cost EMI</p>
                                <p className="card-text">
                                    FREE delivery by <b>Sun, 15th Sept, 7:00 am - 9:00 pm</b>
                                </p>
                                <button className="btn btn-warning w-50 mt-auto rounded-5">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
