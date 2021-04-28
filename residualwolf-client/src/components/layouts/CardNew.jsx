import React, { Fragment } from "react";

export default (props) => {
  // console.log("card", post);
  const post = props.post;
  const onClick = () => {
    props.history.push(`/blog-details?id=${post._id}`);
  };
  return (
    <Fragment>
      <div className="col-md-4 mt-2" key={post._id}>
        <div className="card-deck-wrapper">
          <div className="card-deck">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="blog-title card-title mt-0">{post.title.length >30 ? post.title.substring(0,30) + "..." : post.title }</h5>
                <img
                  className="blog-img-2 card-img-top img-fluid"
                  src={post.imageUrl}
                  alt="Card image cap"
                />
              </div>
              <div className="row text-center mt-2 mb-2">
                <div className="col-md-12">
                  <a
                    href={`/blog-details?id=${post._id}`}
                    className="btn btn-sm text-center btn-outline-primary ml-1"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
