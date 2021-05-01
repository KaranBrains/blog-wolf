import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="md"
        className="nav-background  py-2 px-3 shadow-sm"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
            width="30"
            height="30"
            alt="logo"
            className="img-fluid py-0 my-0 logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links ml-auto">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-demi font-17 px-3 navbar-item
                  text-primaryColor text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/blog-list" activeClassName="activeNav">
              <Nav.Link
                as={Link}
                to="/blog-list"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Blog
              </Nav.Link>
            </NavLink>
            <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              className="font-demi font-17 px-3 navbar-item mobile-visible text-center "
            >
              <div
                style={{
                  background: "#faf4fc",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <Link
                  to="/"
                  className="font-medium text-primaryColor dropdown-item"
                >
                  Personal Blogs
                </Link>
                <Link
                  to="/"
                  className="font-medium text-primaryColor dropdown-item"
                >
                  Bussiness Blogs
                </Link>
                <Link
                  to="/"
                  className="font-medium text-primaryColor dropdown-item"
                >
                  Affiliate Blogs
                </Link>
                <Link
                  to="/"
                  className="font-medium text-primaryColor dropdown-item"
                >
                  Niche Blogs
                </Link>
              </div>
            </NavDropdown>
            <NavLink to="/login" activeClassName="activeNav">
              <Nav.Link
                href="/login"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Login
              </Nav.Link>
            </NavLink>
            <NavLink to="/signup" activeClassName="activeNav">
              <Nav.Link
                href="/signup"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                SignUp
              </Nav.Link>
            </NavLink>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              ></input>
              <i className="fa fa-search mt-3 ml-2 text-primaryColor"></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
