import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = ({ userData, logout }) => {
  return (
    <>
      <nav
        style={{ padding: "10px" }}
        className=" shadow container-fluid d-flex flex-md-row flex-column align-items-center justify-content-between"
      >
        <div className="left-nav d-flex flex-md-row flex-column align-items-center ">
          <Link to={"/"}>
            <img
              src="assets/moviesLogo2.png"
              alt="logo"
              className="m-0 pe-2"
              style={{ width: "110px" }}
            />
          </Link>

          {userData ? (
            <ul className="list-unstyled d-flex flex-md-row flex-column my-0 ms-5 align-items-center">
              <li className="px-3">
                <Link className="hovre" to={"home"}>
                  Home
                </Link>
              </li>
              <li className="px-3">
                <Link className="hovre" to={"about"}>
                  About
                </Link>
              </li>
              <li className="px-3">
                <Link className="hovre" to={"movies"}>
                  Movies
                </Link>
              </li>
              <li className="px-3">
                <Link className="hovre" to={"people"}>
                  People
                </Link>
              </li>
              <li className="px-3">
                <Link className="hovre" to={"tv"}>
                  Tv
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        {/* ========================== */}
        <div className="right-nav d-flex flex-md-row flex-column align-items-center ">
          <div className="social-icons">
            <FaFacebook style={{ margin: "0 5px" }} />
            <FaXTwitter style={{ margin: "0 5px" }} />
            <FaInstagram style={{ margin: "0 5px" }} />
            <FaYoutube style={{ margin: "0 5px" }} />
            <FaSpotify style={{ margin: "0 5px" }} />
          </div>

          <ul className="list-unstyled d-flex flex-md-row flex-column m-0 align-items-center">
            {userData ? (
              <>
                <li className="px-2 cursor-pointer " onClick={logout}>
                  <span className="hovre">LogOut</span>
                </li>
                <li className="px-2">
                  <Link className="hovre" to={"profile"}>
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="px-2">
                  <Link className="hovre" to={"register"}>
                    Register
                  </Link>
                </li>
                <li className="px-2">
                  <Link className="hovre" to={"login"}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
