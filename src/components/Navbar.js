import React from "react";
import Logo from "../images/Logo.png";
import ArrowUpSlant from "../images/ArrowUpSlant.png";
import ArrowDown from "../images/ArrowDown.png";
import AppStore from "../images/appstore.png";
import PlayStore from "../images/playstore.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="sticky-top bg-white">
      <nav class="navbar bg-white px-md-5 px-0 top-nav-none pb-0 container">
        <div class="container-fluid w-100 d-flex justify-content-end">
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="/aboutus"
              href="#"
              className="marginright30 top-nav-link-nav"
            >
              About Us{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 drop-chevron"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/support"
              href="#"
              className="marginright30 top-nav-link-nav"
            >
              Support{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 drop-chevron"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/login"
              href="#"
              className="marginright30 top-nav-link-nav"
            >
              Login
            </Link>

            {/* <div class="dropdown dropdown-nav-main marginright30">
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
          </div> */}
            {/* <div class="dropdown dropdown-nav-main marginright30">
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
          </div> */}

            <div className="row d-flex align-items-center">
              <div className="col-md-6 mt-2 ">
                <img src={AppStore} alt="" className="logo-playstore-nav-top" />
              </div>
              <div className="col-md-6 mt-2">
                <img src={PlayStore} alt="" className="logo-appstore-nav-top" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar  navbar-expand-lg navbar-light nav-custom-classes pt-3 pb-3 px-md-5 px-0 container">
        <Link className="navbar-brand px-2" to="/">
          <img src={Logo} alt="" className="logo-nav-main" />
        </Link>
        <button
          className="navbar-toggler nav-main-toggle-button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse main-nav-menu"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-item-left">
            {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}

            <Link
              to="/aboutus"
              href="#"
              className="marginright30 top-nav-link-nav  dropdown-nav-main"
            >
              Exchange
            </Link>
            <Link
              to="/aboutus"
              href="#"
              className="marginright30 top-nav-link-nav  dropdown-nav-main"
            >
              Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 drop-chevron"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/aboutus"
              href="#"
              className="marginright30 top-nav-link-nav  dropdown-nav-main"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 drop-chevron"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* <div class="dropdown dropdown-nav-main">
              <Link
                class="dropdown dropdown-nav-main marginright10 top-nav-link-nav"
                href=""
              >
                Exchange
              </Link>
            </div>
            <div class="dropdown dropdown-nav-main">
              <Link
                class="dropdown dropdown-nav-main marginright10 top-nav-link-nav"
                href=""
              >
                Product
              </Link>
            </div>
            <div class="dropdown dropdown-nav-main">
              <Link
                class="dropdown dropdown-nav-main marginright10 top-nav-link-nav"
                href=""
              >
                Resources
              </Link>
            </div> */}

            {/* <div class="dropdown dropdown-nav-main">
              <button
                class="nav-link-button"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
                <span className="marginleft5 mb-2">
                  <img src={ArrowDown} alt="" className="" />
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
            </div> */}
            {/* <div class="dropdown dropdown-nav-main">
              <button
                class="nav-link-button"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
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
            </div> */}
          </ul>

          <div className="button-top-nav">
            <button className="nav-top-button px-5 py-2" type="submit">
              Start Trading
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
