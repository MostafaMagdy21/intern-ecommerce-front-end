import { useState } from "react";
import polygon from "../../images/Polygon-black.png";
import logo from "../../images/Vector.svg";
import line from "../../images/line.svg";

function Login() {
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/users?mobile=${mobile}`);
            const users = await response.json();

            if (users.length > 0) {
                const user = users[0];
                localStorage.setItem("user", JSON.stringify(user));
                alert("Login successful!");
                window.location.href = "/dashboard";
            } else {
                setError("Phone number not found.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 px-3">
            <div className="text-center w-100">
                <h2>Amazon<span className="fs-6">.in</span></h2>
                <img src={logo} className="d-block mx-auto mt-0 mb-4" alt="logo" style={{ maxWidth: "100px" }} />
                <div className="card mx-auto p-4 w-100" style={{ maxWidth: "580px" }}>
                    <h3 className="text-start mb-4">Sign in</h3>
                    <form className="text-start" onSubmit={handleLogin}>
                        <label htmlFor="mobile" className="form-label">Mobile Phone Number</label>
                        <input 
                            className="form-control mb-2" 
                            id="mobile" 
                            type="text" 
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)} 
                            required 
                        />
                        {error && <p className="text-danger">{error}</p>}
                        <button className="btn btn-warning w-100 mt-3 mb-3" type="submit">Continue</button>
                    </form>
                    <div className="text-start">
                        <h6>By continuing, you agree to Amazon’s <a href="#">Conditions of Use</a></h6>
                        <h6 className="mb-3">and <a href="#">Privacy Notice</a></h6>
                        <a href="#" className="text-decoration-none">
                            <img src={polygon} alt="" className="me-1" style={{ width: "12px" }} /> Need Help?
                        </a>
                        <hr />
                        <h4>Buying For Work?</h4>
                        <a href="#" className="text-decoration-none">Shop on Amazon Business</a>
                    </div>
                </div>
                <div className="d-flex align-items-center text-secondary my-3 mx-auto w-100" style={{ maxWidth: "580px" }}>
                    <div className="flex-grow-1 border-bottom"></div>
                    <span className="mx-2">New to Amazon?</span>
                    <div className="flex-grow-1 border-bottom"></div>
                </div>
                <button onClick={() => window.location.href = "/register"} className="btn btn-outline-secondary w-100" style={{ maxWidth: "580px" }}>
                    Create Your Amazon Account
                </button>
                <img src={line} className="d-block mx-auto mt-4 mb-4" alt="line" style={{ maxWidth: "100%", height: "auto" }} />
                <div className="links mb-3">
                    <a className="me-3 text-decoration-none" href="#">Conditions of Use</a>
                    <a className="me-3 text-decoration-none" href="#">Privacy Notice</a>
                    <a className="text-decoration-none" href="#">Help</a>
                </div>
                <p className="text-muted">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
}

export default Login;
