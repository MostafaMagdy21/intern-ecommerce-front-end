import { useState } from "react";
import {logo} from '../../images/Vector.png'; 

function Register() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [pass, setPass] = useState("");

    // Function to handle registration
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent form submission refresh
        const userData = { name, mobile, password: pass }; // Create user object

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("User registered successfully!");
                setName("");
                setMobile("");
                setPass("");
            } else {
                alert("Failed to register user.");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("An error occurred.");
        }
    };

    return (
        <>
            <div className="register mx-auto">
                <h2>Amazon<span className="fs-6">.in</span></h2>
                <img src={logo} className="w-100" alt="" />
                <div className="card mx-auto">
                    <h3 className="text-start mb-4">Create Account</h3>
                    <form className="text-start" onSubmit={handleRegister}>
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input 
                            onChange={(e) => setName(e.target.value)} 
                            className="form-control mb-2" 
                            id="name" 
                            type="text" 
                            value={name} 
                            required 
                        />

                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                        <input 
                            onChange={(e) => setMobile(e.target.value)} 
                            className="form-control mb-2" 
                            id="mobile" 
                            type="number" 
                            value={mobile} 
                            required 
                        />

                        <label htmlFor="pass" className="form-label">Password</label>
                        <input 
                            onChange={(e) => setPass(e.target.value)} 
                            className="form-control" 
                            id="pass" 
                            type="password" 
                            value={pass} 
                            required 
                        />

                        <button type="submit" className="btn btn-warning w-100 mt-3">
                            Verify Mobile Number
                        </button>
                    </form>
                    <hr />
                    <div className="text-start">
                        <h6>Buying For work?</h6>
                        <a href="" className="text-decoration-none">Create a free business account</a>
                        <hr />
                        <h4 className="fs-6">Already have an account? 
                            <a href="" className="text-decoration-none fs-6">
                                Sign In <img src="../../images/Polygon 2.png" alt="" />
                            </a>
                        </h4>
                        <h6>By creating an account or logging in, you agree to Amazon’s</h6>
                        <h6>
                            <a href="">Conditions of use</a> and <a href="">Privacy Notice.</a>
                        </h6>
                    </div>
                </div>
                <hr className="w-100" />
                <div className="links mb-3">
                    <a className="me-3 text-decoration-none" href="">Conditions of use</a>
                    <a className="me-3 text-decoration-none" href="">Privacy Notice</a>
                    <a className="text-decoration-none" href="">Help</a>
                </div>
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </>
    );
}

export default Register;
