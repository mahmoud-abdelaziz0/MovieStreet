import React from "react";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="image-about mx-auto" style={{ width: "30%" }}>
          <img className="w-100" src="assets/about1.png" alt="" />
        </div>
      </div>
      {/* ************ Start Welcome Words ************ */}
      <div className="welcom-word row my-5 mx-0 p-0 ">
        <div className="line col-3"></div>
        <h1 className="col-6 d-inline-block w-50 m-0 p-0 text-center">
          About Us
        </h1>
        <div className="line col-3"></div>
      </div>
      {/* ************ End Welcome Words ************ */}
      {/* ============= Start main contnet ============= */}
      <div className="about-content row d-flex flex-column justify-content-center align-items-center text-center gap-3">
        <h1>About Movie Street</h1>
        <h5>
          Welcome to Movie Street, your ultimate destination for all things
          movies!
        </h5>
        <p className="w-75 h6 fw-normal">
          At Movie Street, we are passionate about cinema and dedicated to
          bringing you the latest and greatest from the world of film. Whether
          you're a casual moviegoer or a hardcore cinephile, we have something
          for everyone. Our goal is to provide a one-stop hub where you can
          explore, discover, and immerse yourself in the magic of movies.
        </p>
      </div>
      {/* ============= End main contnet ============= */}
    </>
  );
};

export default About;
