import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div>
              <h1 className="text-center font-bold text-black mb-4">
                Welcome to Residual Wolf, Signup here...
              </h1>
              <form>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <Link to="/login">
                  {" "}
                  <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                  Already a member?{" "}                   
                    <span className="ml-2 text-secondaryColor">Signin</span>
                  </div>
                </Link>                
                <Link to="">
                  <div className="text-center mt-4">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Signup
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
