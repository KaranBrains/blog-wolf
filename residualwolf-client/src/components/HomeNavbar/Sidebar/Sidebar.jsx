import React from "react";
import "./Sidebar.css";

function NavbarComponent() {
  return (
    <>
      <div class="nav-left-sidebar sidebar-dark">
        <div class="menu-list">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav flex-column">
                <li class="nav-divider text-primaryColor">Categories</li>
                <li class="nav-item ">
                  <a class="nav-link active" href="#">
                    <i class="fa fa-fw fa-user-circle"></i>Personal Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-fw fa-rocket"></i>Business Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-chart-pie"></i>Affiliate Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-table"></i>Niche Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
