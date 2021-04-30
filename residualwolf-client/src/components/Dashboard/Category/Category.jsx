import React , { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Modal } from "react-bootstrap";

function Category() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">
                Add a Category
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="w-100 h-100">
          <form>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Category Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="title"
                    className="form-control mt-3 mb-4"
                    id="exampleFormControlInput1"
                    placeholder="Category Description"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </form>
          </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <main className={classes.content}>        
        <div class="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 col-md-12 d-flex justify-content-end">
              <button class="btn btn-primary" onClick={handleShow}>Add a Category</button>
            </div>
          </div>
          <div class="row mb-5 mt-3">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card font-regular">
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Category 1
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
            </div>
            <div class="row mb-5 mt-3">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card font-regular">
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Category 2
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Category;
