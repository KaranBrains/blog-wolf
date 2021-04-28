import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog-list">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create-blog">
                Add Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
