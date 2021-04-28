import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text" style={{ color: "white" }}>
          © {new Date().getFullYear()} ResidualWolf
        </span>
      </nav>
    </Fragment>
  );
};
