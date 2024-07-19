import React, { useContext } from "react";
import { MediaContext } from "../../Context/MediaContextProvider";
import MediaItem from "../MediaItem/MediaItem";

const People = () => {
  const { trendingPerson } = useContext(MediaContext);
  return (
    <>
      <div className="row">
        <div className="image-people mx-auto" style={{ width: "30%" }}>
          <img className="w-100" src="assets/actor.png" alt="" />
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
            All Actors
          </h1>
          <div className="line col-3"></div>
        </div>
        {/* ************ End Welcome Words ************ */}
      </div>
      <div className="row">
        {trendingPerson?.map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default People;
