import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  let paramsData = useParams();
  console.log(paramsData);
  const [itemdetails, setItemdetails] = useState({});
  const [similar, setSimilar] = useState({});

  async function getItemDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${paramsData.media_type}/${paramsData.id}?api_key=e1f7cc0567e33eb9493a40229fdd50bb&language=en-US`
    );
    setItemdetails(data);
  }
  async function getSimilar() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${paramsData.media_type}/${paramsData.id}/similar?api_key=e1f7cc0567e33eb9493a40229fdd50bb&language=en-US&page=1`
    );
    setSimilar(data);
  }
  console.log("itemdetails", itemdetails);
  console.log("similar", similar);

  useEffect(() => {
    getItemDetails();

    if (paramsData.media_type !== "person") {
      getSimilar();
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="media col-md-3">
            <img
              className="w-100 rounded-3"
              src={
                "https://image.tmdb.org/t/p/w500" +
                (paramsData.media_type === "person"
                  ? itemdetails.profile_path
                  : itemdetails.poster_path)
              }
              alt=""
            />
          </div>
          <div className="details col-md-9">
            <h2>
              {paramsData.media_type === "movie"
                ? itemdetails.title
                : itemdetails.name}
            </h2>
            <p>
              {paramsData.media_type === "person"
                ? itemdetails.biography?.slice(0, 300)
                : itemdetails.overview}
            </p>
            {itemdetails.seasons ? <h3>Seasons</h3> : ""}
            <div className="row">
              {itemdetails.seasons?.map((season, i) => {
                return (
                  <>
                    <div
                      className="season position-relative col-md-3 my-2"
                      style={{ width: "15%" }}
                    >
                      <img
                        className="w-100 rounded-3"
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          season.poster_path
                        }
                        alt=""
                      />
                      <p
                        style={{ fontSize: "10px" }}
                        className="movie-title-details m-0 mt-2  text-center"
                      >
                        {season.title} {season.name}
                      </p>
                      {season.vote_average > 0 && (
                        <div className="vote-details p-2 position-absolute d-none d-lg-block">
                          {season.vote_average?.toFixed(1)}
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row">
              {itemdetails.genres?.map((genre, i) => {
                return (
                  <div className="genre col-md-2" key={i}>
                    {genre.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
