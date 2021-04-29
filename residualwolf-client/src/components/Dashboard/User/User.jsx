import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function User() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="row my-5 d-flex justify-content-center">
          <div className="col-lg-6 col-sm-12 col-md-6 col-12">
            <div className="card text-center py-4">
              <div className="text-center my-3">
                <img
                  src="https://source.unsplash.com/random/400x400"
                  alt=""
                  style={{}}
                  style={{
                    height: "400px",
                    width: "400px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h4 className="card-title font-bold">Username</h4>
              <h6 className="card-subtitle mb-2 text-muted font-demi font-20">
                @Shruti3004
              </h6>
            </div>
          </div>
          <div className="col-lg-8 col-sm-8 col-md-12 col-12"></div>
        </div>
      </div>
    </>
  );
}

export default User;
