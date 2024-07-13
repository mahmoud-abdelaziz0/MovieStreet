import React from "react";

const MediaItem = ({ item }) => {
  return (
    <>
      <div className="col-md-2 my-2">
        <div className="movie position-relative">
          {item.poster_path ? (
            <img
              src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              className="w-100 rounded-4"
              alt=""
            />
          ) : (
            <img
              src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
              className="w-100 rounded-4"
              alt=""
            />
          )}

          <h3 className="movie-title h6 m-0 position-absolute bottom-0 start-0 d-flex justify-content-center align-items-center text-center">
            {item.title} {item.name}
          </h3>

          {item.vote_average && (
            <div className="vote p-2 position-absolute">
              {item.vote_average?.toFixed(1)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MediaItem;
