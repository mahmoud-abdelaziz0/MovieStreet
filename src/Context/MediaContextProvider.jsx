import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MediaContext = createContext();

const MediaContextProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [trendingPerson, setTrendingPerson] = useState();
  const [trendingTv, setTrendingTv] = useState();

  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=e1f7cc0567e33eb9493a40229fdd50bb`
    );
    callback(data.results);
    console.log(`${mediaType}`, data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("person", setTrendingPerson);
    getTrending("tv", setTrendingTv);
  }, []);

  return (
    <>
      <MediaContext.Provider
        value={{ trendingMovies, trendingTv, trendingPerson }}
      >
        {children}
      </MediaContext.Provider>
    </>
  );
};

export default MediaContextProvider;
