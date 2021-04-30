import React, { Fragment, useContext, useEffect } from "react";
import Context from "../../context/ResidualWolf/Context";
import Spinner from "../layouts/Spinner";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default ({ location }) => {
  const id = location.search.split("=")[1];
  console.log(id, "iddddd");
  const context = useContext(Context);
  const { getPost, post } = context;

  useEffect(() => {
    getPost(id);
  }, [id]);
  return (
    <Fragment>
      <Navbar />
      {post !== null ? (
        <div className="container-fluid">
          <div className="row mt-3">

            <div className="col-lg-8 blog-side  col-12">
              <h3>{post.title}</h3>
              <div class="media ">
                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{ width: 40 }}></img>
                <div class="media-body">
                  <h6 className="mt-3">by Residual Wolf</h6>
                  <small><i>Posted on {post.createdAt.split('T')[0]}</i></small>
                </div>
              </div>
              <div className="blog-img-1">
                <img src={post.imageUrl} alt="" className="blog-img" />
              </div>
              <div className="description">
                <p>{post.description}</p>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>


                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={'blog-details?id=6085d5af36f676415ccb7620'}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0">5 Ways to curate content on blog post</h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2">Many business websites are focused on providing information, much of which doesn’t actually change that much. The “About Us” page isn’t constantly evolving. Same with the “Contact Us” page</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 addsense p-2">
            </div>
          </div>

          <div className="col-md-12 mt-5">
            <hr></hr>
            <h6 className="title mt-3">Comments: </h6>
            

          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <Footer />
    </Fragment>
  );
};
