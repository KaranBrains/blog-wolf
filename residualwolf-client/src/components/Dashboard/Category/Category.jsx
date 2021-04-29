import React from "react";
import { Accordion, Card } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

function Category() {
  return (
    <div>
      <Sidebar />
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-lg-10 col-sm-12 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <Accordion>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div class="card font-regular">
                      <img
                        src="https://source.unsplash.com/random/"
                        alt=""
                        class="img-fluid card-img-top"
                        style={{ height: "250px" }}
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
                        <h5 class="text-dark font-weight-bold mt-2 font-demi">
                          Keep it simple and beautiful, fun and functional
                        </h5>
                        <p class="font-regular">
                          Best landing for your app showcase Follow other
                          investors, discover companies to believe in.
                        </p>
                      </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <table class="table font-regular">
                        <thead>
                          <tr className="font-bold">
                            <th scope="col">S.No</th>
                            <th scope="col">Blog Name</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <Accordion>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div class="card font-regular">
                      <img
                        src="https://source.unsplash.com/random/"
                        alt=""
                        class="img-fluid card-img-top"
                        style={{ height: "250px" }}
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
                        <h5 class="text-dark font-weight-bold mt-2 font-demi">
                          Keep it simple and beautiful, fun and functional
                        </h5>
                        <p class="font-regular">
                          Best landing for your app showcase Follow other
                          investors, discover companies to believe in.
                        </p>
                      </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <table class="table font-regular">
                        <thead>
                          <tr className="font-bold">
                            <th scope="col">S.No</th>
                            <th scope="col">Blog Name</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
