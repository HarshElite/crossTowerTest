import React from "react";
import ArrowDown from "../images/ArrowDown.png";
import AppStore from "../images/appstore.png";
import PlayStore from "../images/playstore.png";
import ArrowUpSlant from "../images/ArrowUpSlant.png";
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (
    <nav class="navbar bg-transparent px-2 top-nav-none">
      <div class="container-fluid w-100 d-flex justify-content-end">
        <div className="d-flex justify-content-end align-items-center">
          <Link
            to="/aboutus"
            href="#"
            className="marginright30 top-nav-link-nav"
          >
            About Us
          </Link>

          <div class="dropdown dropdown-nav-main marginright30">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Support
              <span className="marginleft5 mb-2">
                <img src={ArrowUpSlant} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link to="/support" class="dropdown-item" href="#">
                  Support
                </Link>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-nav-main marginright30">
            <button
              class="nav-link-button "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
              <span className="marginleft5 mb-2">
                <img src={ArrowUpSlant} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-md-6 mt-2">
              <img src={AppStore} alt="" className="logo-playstore-nav-top" />
            </div>
            <div className="col-md-6 mt-2">
              <img src={PlayStore} alt="" className="logo-appstore-nav-top" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
