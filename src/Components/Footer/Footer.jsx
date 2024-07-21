import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" m-0 p-1 w-100 text-center">
        <Link to={"/"}>
          <img
            src="assets/moviesLogo2.png"
            alt="logo"
            className="my-2"
            style={{ width: "120px" }}
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;
