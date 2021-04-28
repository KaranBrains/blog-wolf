import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background  py-2 px-3"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo" className="img-fluid py-0 my-0 logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-demi font-17 px-3 navbar-item
                  text-primaryColor text-center">
                HOME
              </Nav.Link>
            </NavLink>
            <NavLink to="/blog-list" activeClassName="activeNav">
              <Nav.Link
                as={Link}
                to="/blog-list"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                BLOG
              </Nav.Link>
            </NavLink>
            <NavLink to="/create-blog" activeClassName="activeNav">
              <Nav.Link
                href="/create-blog"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                ADD BLOG
              </Nav.Link>
            </NavLink>
            <NavLink to="/login" activeClassName="activeNav">
              <Nav.Link
                href="/login"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                LOGIN
              </Nav.Link>
            </NavLink>
            <NavLink to="/signup" activeClassName="activeNav">
              <Nav.Link
                href="/signup"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                SIGNUP
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <nav className="ml-auto">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                ></input><i className="fa fa-search mt-3 ml-2 text-primaryColor"></i>
            </div>
        </nav>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
