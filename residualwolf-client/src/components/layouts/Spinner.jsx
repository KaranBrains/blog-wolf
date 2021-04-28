import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

export default () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        style={{ width: "300px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};
