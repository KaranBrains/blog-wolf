import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import avatar from "../../../images/profile_avatar.png";

function User() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },    
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <main className={classes.content}>        
        <div class="container">
          <div class="row mb-5 mt-3">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top p-3"
                  style={{                    
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Username : @Alpha _Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Full Name : Alpha Beta
                  </p>
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger ml-3">Delete</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top p-3"
                  style={{                    
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Username : @Alpha _Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Full Name : Alpha Beta
                  </p>
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger ml-3">Delete</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top p-3"
                  style={{                    
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Username : @Alpha _Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Full Name : Alpha Beta
                  </p>
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger ml-3">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
