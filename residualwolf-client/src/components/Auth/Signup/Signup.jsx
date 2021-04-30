import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import swal from "sweetalert";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return swal("", "Enter the valid Details", "error");
    }
    axios
      .post(
        "http://localhost:9701/users/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data.message) {
          return swal("", res.data.message, "error");
        }
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("auth", res.data.auth);

        if (window.localStorage.getItem("auth") == "user") {
          swal("", "You are signed up", "success");
          window.location.href = "/";
        }
      })
      .catch((err) => swal("", err, "error"));
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div>
              <h1 className="text-center font-bold text-black mb-4">
                Welcome to Residual Wolf, Signup here...
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password (Min 6 chars.)"
                    required
                  />
                </div>
                <Link to="/login">
                  {" "}
                  <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                    Already a member?{" "}
                    <span className="ml-2 text-secondaryColor">Signin</span>
                  </div>
                </Link>
                <div className="text-center mt-4">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
