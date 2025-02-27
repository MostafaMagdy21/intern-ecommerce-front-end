import { useState } from "react";
import logo from "../../images/Vector.svg";
import line from "../../images/line.svg";
import polygon from "../../images/Polygon 2.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = { name, mobile, password: pass };

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
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="text-center w-100">
        <h2>Amazon<span className="fs-6">.in</span></h2>
        <img src={logo} className="d-block mx-auto mt-0 mb-4 img-fluid" alt="logo" style={{ maxWidth: "100px" }} />

        <div className="card p-4 mx-auto shadow-sm w-100" style={{ maxWidth: "580px", borderRadius: "8px" }}>
          <h3 className="text-start mb-3">Create Account</h3>
          <form className="text-start" onSubmit={handleRegister}>
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="form-control mb-3"
              id="name"
              type="text"
              value={name}
              required
            />

            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input
              onChange={(e) => setMobile(e.target.value)}
              className="form-control mb-3"
              id="mobile"
              type="tel"
              value={mobile}
              required
            />

            <label htmlFor="pass" className="form-label">Password</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              className="form-control mb-3"
              id="pass"
              type="password"
              value={pass}
              required
            />

            <button type="submit" className="btn btn-warning w-100 rounded-3">
              Verify Mobile Number
            </button>
          </form>

          <hr />
          <p className="text-start">
            Already have an account?{" "}
            <a href="../Login" className="text-decoration-none">
              Sign In <img src={polygon} alt="" className="img-fluid" />
            </a>
          </p>
        </div>

        <img src={line} className="d-block mx-auto mt-4 mb-4 img-fluid w-100" alt="line" />

        <div className="links mb-3">
          <a className="me-3 text-decoration-none" href="#">Conditions of use</a>
          <a className="me-3 text-decoration-none" href="#">Privacy Notice</a>
          <a className="text-decoration-none" href="#">Help</a>
        </div>
        <p className="text-muted">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Register;
