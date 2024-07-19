import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";
import Img6 from "../../images/Img6.png";
import Img7 from "../../images/Img7.jpg";
import Img8 from "../../images/Img8.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import MediaItem from "../MediaItem/MediaItem";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaContextProvider";

const Home = () => {
  const [active, setActive] = useState(0);
  let { trendingMovies, trendingTv, trendingPerson } = useContext(MediaContext);

  const sliderContent = [
    {
      img: Img1,
      name: "The Maze Runner",
    },
    {
      img: Img2,
      name: "Dune",
    },
    {
      img: Img3,
      name: "Harry Potter",
    },
    {
      img: Img4,
      name: "Interstellar",
    },
    {
      img: Img5,
      name: "Kingdom of the Planet of the Apes",
    },
    {
      img: Img6,
      name: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      img: Img7,
      name: "The Boys",
    },
    {
      img: Img8,
      name: "Despicable Me 4",
    },
  ];

  const handleSlide = (direction) => {
    if (direction === "next") {
      setActive((prevActive) => (prevActive + 1) % sliderContent.length);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleSlide("next");
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <>
      {/* ============= Start Home Welcome ============= */}
      <div className="paretn my-4 d-flex justify-content-between">
        {/* left Side */}

        <div
          className="d-none d-lg-block rounded position-relative shadow-sm overflow-hidden bg-secondary"
          style={{ width: "800px", height: "400px" }}
        >
          <div
            className="position-relative overlay"
            style={{ width: "800px", height: "400px" }}
          >
            {sliderContent.map((slide, i) => {
              return (
                <div className="image" key={i}>
                  <img
                    src={slide.img}
                    alt="slideimage"
                    className={`w-100 h-100 position-absolute ${
                      i === active ? "" : "clip-hidden"
                    }`}
                    style={{
                      objectFit: "cover",
                      top: "0",
                      left: "0",
                      transition: "1s ease-out",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
        {/* Right Side */}
        <div className="image m-auto" style={{ width: "400px" }}>
          <img src="assets/Horror.png" alt="" className="w-100" />
        </div>
      </div>
      {/* ============= End Home Welcome ============= */}
      {/* ************ Start Welcome Words ************ */}
      <div className="welcom-word row my-5 mx-0 p-0 ">
        <div className="line col-3"></div>
        <h1 className="col-6 d-inline-block w-50 m-0 p-0 text-center">
          Welcome To Our Cinema
        </h1>
        <div className="line col-3"></div>
      </div>
      {/* ************ End Welcome Words ************ */}
      {/* ############ Start Main Content ############ */}
      <div className=" row py-5">
        <div className="trending-title col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr brdr-small w-25 mb-3"></div>
            <h2 className="h4">
              Trending Movies <br /> To Watch Right Now
            </h2>
            <p className="py-2 text-secondary">
              Watched Movies To Watch Right Now
            </p>

            <Link className="btn btn-danger" to={"/movies"}>
              More Movies
            </Link>

            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {trendingMovies?.slice(0, 10).map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
      {/* ************ Start breaker ************ */}
      <div className=" my-5 mx-0 p-0 ">
        <div className="breaker col-3"></div>
      </div>
      {/* ************ End breaker ************ */}
      {/* =========================================================== */}
      <div className="row py-5">
        <div className="trending-title col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr brdr-small w-25 mb-3"></div>
            <h2 className="h4">
              Trending Tv <br /> To Watch Right Now
            </h2>
            <p className="py-2 text-secondary">Watched Tv To Watch Right Now</p>
            <Link className="btn btn-danger" to={"/tv"}>
              More Tv
            </Link>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>

        {trendingTv?.slice(0, 10).map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
      {/* ************ Start breaker ************ */}
      <div className=" my-5 mx-0 p-0 ">
        <div className="breaker col-3"></div>
      </div>
      {/* ************ End breaker ************ */}
      {/* =========================================================== */}
      <div className="row py-5">
        <div className="trending-title col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr brdr-small w-25 mb-3"></div>
            <h2 className="h4">
              Trending people <br /> To Watch Right Now
            </h2>
            <p className="py-2 text-secondary">
              Watched people To Watch Right Now
            </p>
            <Link className="btn btn-danger" to={"/people"}>
              More Actors
            </Link>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>

        {trendingPerson
          ?.filter((person) => person.profile_path !== null)
          .slice(0, 10)
          .map((item, index) => (
            <MediaItem item={item} key={index} />
          ))}
      </div>

      {/* ############ End Main Content ############ */}
    </>
  );
};

export default Home;
