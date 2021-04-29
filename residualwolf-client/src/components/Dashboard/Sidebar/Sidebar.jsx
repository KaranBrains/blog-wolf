import React from "react";
import { Nav } from "react-bootstrap";
// import "../Dashboard.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      {/* <Nav
        className="col-md-12 d-none d-md-block bg-dark sidebar"
        activeKey="/home"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">
            <div className="font-demi text-white font-20">Dashboard</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <div className="font-demi text-white font-20">User</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <div className="font-demi text-white font-20">Blogs</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">
            <div className="font-demi text-white font-20">Category</div>
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      <div className={`aside`}>
        <div className={`nav-toggler`}>
          <span></span>
        </div>
        <div className="aside-inner">
          <ul className="nav">
            <li className="text-white font-demi">
              <Link to="/dashboard"> Dashboard </Link>
            </li>
            <br />
            <li className="text-white font-demi">
              <Link to="/dashboard/blogs"> Blogs</Link>
            </li>
            <br />
            <li className="text-white font-demi">
              <Link to="/dashboard/category"> Category </Link>
            </li>
            <br />
            <li className="text-white font-demi">
              <Link to="/dashboard/user"> User </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
