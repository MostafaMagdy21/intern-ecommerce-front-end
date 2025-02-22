import { useState } from "react";

function Login() {
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form refresh

        try {
            const response = await fetch(`http://localhost:3000/users?mobile=${mobile}`);
            const users = await response.json();

            if (users.length > 0) {
                const user = users[0]; // Get the user with the matching mobile number
                localStorage.setItem("user", JSON.stringify(user)); // Store user data
                alert("Login successful!");
                window.location.href = "/dashboard"; // Redirect to dashboard
            } else {
                setError("Phone number not found.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="register mx-auto">
                <h2>Amazon<span className="fs-6">.in</span></h2>
                <img src="../../images/Vector.svg" className="w-100" alt="" />
                <div className="card mx-auto mb-3">
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
                        
                        <button className="btn btn-warning w-100 mt-3 mb-3" type="submit">
                            Continue
                        </button>
                    </form>
                    
                    <div className="text-start">
                        <h6>By continuing, you agree to Amazon’s <a href="">Conditions of Use</a></h6>
                        <h6 className="mb-3">and <a href="">Privacy Notice</a></h6>
                        <a href="" className="text-decoration-none">Need Help?</a>
                        <hr />
                        <h4>Buying For Work?</h4>
                        <a href="" className="text-decoration-none">Shop on Amazon Business</a>
                    </div>
                </div>
                <div>
                    <h6>New to Amazon?</h6>
                    <button className="btn btn-transparent border">Create Your Amazon Account</button>
                </div>
                
                <hr className="w-100"/>
                <div className="links mb-3">
                    <a className="me-3 text-decoration-none" href="">Conditions of Use</a>
                    <a className="me-3 text-decoration-none" href="">Privacy Notice</a>
                    <a className="text-decoration-none" href="">Help</a>
                </div>
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </>
    );
}

export default Login;
