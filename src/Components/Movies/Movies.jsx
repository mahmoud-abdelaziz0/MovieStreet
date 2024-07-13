import React, { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { MediaContext } from "../../Context/MediaContextProvider";

const Movies = () => {
  const { trendingMovies } = useContext(MediaContext);
  return (
    <>
      <div className="row">
        <div className="image mx-auto" style={{ width: "30%" }}>
          <img className="w-100" src="assets/Film1.png" alt="" />
        </div>
      </div>
      <div className="row">
        {/* ************ Start Welcome Words ************ */}
        <div className="welcom-word row mt-0 mb-5 mx-0 p-0 ">
          <div className="line col-3"></div>
          <h1
            className="col-6 d-inline-block w-50 m-0 p-0 text-center"
            style={{ fontSize: "30px" }}
          >
            All Movies
          </h1>
          <div className="line col-3"></div>
        </div>
        {/* ************ End Welcome Words ************ */}
      </div>
      <div className="row">
        {trendingMovies?.map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Movies;
