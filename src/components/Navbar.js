import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark   navColor">
        <div class="container-fluid  ">
          <a
            class="btn  btn-outline-dark border-color text-white mt-2 bi bi-toggle2-on element  "
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Toggle
          </a>
          {/* <a class="navbar-brand element border-color px-3 mx-4 " href="#">
            Admin Dashboard
          </a> */}
          {/* <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          {/* <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 ">
              <li class="nav-item border-color element ms-3 ">
                <a class="nav-link text-white " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item border-color element ms-3 ">
                <a class="nav-link text-white " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item border-color element ms-3 ">
                <a class="nav-link text-white" href="#">
                  Profile
                </a>
                
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
