import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ userData, logout }) => {
  const [nav, setNav] = useState(false);
  const handleMenuClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav
        style={{ padding: "10px" }}
        className=" shadow container-fluid d-flex align-items-center justify-content-between"
      >
        <Link to={"/"}>
          <img
            src="assets/moviesLogo2.png"
            alt="logo"
            className="m-0 pe-2"
            style={{ width: "110px" }}
          />
        </Link>
        {/* Start Website State */}
        <div className="left-nav d-none d-lg-flex align-items-center">
          {userData ? (
            <ul className="list-unstyled d-flex flex-md-row flex-column my-0 ms-5 align-items-center">
              <li className="px-2">
                <Link className="hovre" to={"home"}>
                  Home
                </Link>
              </li>
              <li className="px-2">
                <Link className="hovre" to={"about"}>
                  About
                </Link>
              </li>
              <li className="px-2">
                <Link className="hovre" to={"movies"}>
                  Movies
                </Link>
              </li>
              <li className="px-2">
                <Link className="hovre" to={"people"}>
                  People
                </Link>
              </li>
              <li className="px-2">
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
        <div className="right-nav d-none d-lg-flex align-items-center ">
          <div className="social-icons d-flex">
            <FaFacebook style={{ margin: "0 5px" }} />
            <FaXTwitter style={{ margin: "0 5px" }} />
            <FaInstagram style={{ margin: "0 5px" }} />
            <FaYoutube style={{ margin: "0 5px" }} />
            <FaSpotify style={{ margin: "0 5px" }} />
          </div>

          <ul className="list-unstyled d-flex m-0 align-items-center">
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
        {/* End Website State */}

        <div className="menu d-lg-none z-3" onClick={handleMenuClick}>
          {!nav ? <FaBars size={"20px"} /> : <FaTimes size={"20px"} />}
        </div>
        {/* =========================================================================================== */}
        {/* Start Mobile State */}
        <div
          className={
            !nav ? "d-none" : "mobile position-absolute top-0 start-0 w-100"
          }
        >
          <div className="left-nav">
            {userData ? (
              <ul className="list-unstyled d-flex  flex-column my-2  align-items-center">
                <li className="py-3 li-mobile">
                  <Link className="hovre-mobile" to={"home"}>
                    Home
                  </Link>
                </li>
                <li className="py-3 li-mobile">
                  <Link className="hovre-mobile" to={"about"}>
                    About
                  </Link>
                </li>
                <li className="py-3 li-mobile">
                  <Link className="hovre-mobile" to={"movies"}>
                    Movies
                  </Link>
                </li>
                <li className="py-3 li-mobile">
                  <Link className="hovre-mobile" to={"people"}>
                    People
                  </Link>
                </li>
                <li className="py-3 li-mobile">
                  <Link className="hovre-mobile" to={"tv"}>
                    Tv
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* ========================== */}
          <div className="right-nav  d-flex flex-column align-items-center justify-content-center">
            <div className="social-icons">
              <FaFacebook style={{ margin: "0 5px" }} />
              <FaXTwitter style={{ margin: "0 5px" }} />
              <FaInstagram style={{ margin: "0 5px" }} />
              <FaYoutube style={{ margin: "0 5px" }} />
              <FaSpotify style={{ margin: "0 5px" }} />
            </div>

            <ul className="list-unstyled d-flex flex-column my-3 align-items-center">
              {userData ? (
                <>
                  <li className="py-2 cursor-pointer " onClick={logout}>
                    <span className="hovre">LogOut</span>
                  </li>

                  <li className="py-2">
                    <Link className="hovre" to={"profile"}>
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="py-2">
                    <Link className="hovre" to={"register"}>
                      Register
                    </Link>
                  </li>

                  <li className="py-2">
                    <Link className="hovre" to={"login"}>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* End Mobile State */}
      </nav>
    </>
  );
};

export default Navbar;
