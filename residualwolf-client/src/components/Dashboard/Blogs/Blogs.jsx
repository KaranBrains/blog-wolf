import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Blogs() {
  return (
    <div>
      <Sidebar />
      <div class="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12 col-md-12 d-flex justify-content-end my-5">
            <button class="btn btn-primary">Add a blog</button>
          </div>
        </div>
        <div class="row mb-5 mt-3">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
            <div class="card font-regular">
              <img
                src="https://source.unsplash.com/random/"
                alt=""
                class="img-fluid card-img-top"
              />
              <div class="card-body">
                <div class="row mt-4">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                    <div class="grey-colored-text-18">Jan 20, 2020</div>
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-7 d-flex justify-content-end">
                    <div class="grey-colored-text-18">
                      <i class="fa fa-comment-o"></i>{" "}
                      22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-heart-o"></i> 112
                    </div>
                  </div>
                </div>
                <h5 class="text-dark font-weight-bold mt-2">
                  Keep it simple and beautiful, fun and functional
                </h5>
                <p class="grey-colored-text-18">
                  Best landing for your app showcase Follow other investors,
                  discover companies to believe in.
                </p>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger ml-3">Delete</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
            <div class="card font-regular">
              <img
                src="https://source.unsplash.com/random/"
                alt=""
                class="img-fluid card-img-top"
              />
              <div class="card-body">
                <div class="row mt-4">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                    <div class="grey-colored-text-18">Jan 20, 2020</div>
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-7 d-flex justify-content-end">
                    <div class="grey-colored-text-18">
                      <i class="fa fa-comment-o"></i>{" "}
                      22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-heart-o"></i> 112
                    </div>
                  </div>
                </div>
                <h5 class="text-dark font-weight-bold mt-2">
                  Keep it simple and beautiful, fun and functional
                </h5>
                <p class="grey-colored-text-18">
                  Best landing for your app showcase Follow other investors,
                  discover companies to believe in.
                </p>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger ml-3">Delete</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="font-16 font-demi">Title</label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-16 font-demi">Thumbnail</label>
                    <input
                      name="thumbnail"
                      type="file"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label className="font-demi font-16">Content</label>
                    <textarea
                      name="description"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
