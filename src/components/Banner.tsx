import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import requests from "../config/Request";
import { Movie } from "../typings";
import { grey } from "@mui/material/colors";

const Banner = () => {
  const [movies, setMovies] = useState<Movie[] | null>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(requests.fetchTrending);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return <div>LOADING!!!</div>;
  }
  const randomMovie = movies[Math.floor(Math.random() * movies.length - 1)];



  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage:
            randomMovie &&
            `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {randomMovie && (randomMovie.title ?? randomMovie.name)}
          </h1>
          <p className="banner__description">
            {randomMovie && randomMovie.overview}
          </p>
          <div className="banner__buttons">
            <button className="banner__button banner__button--white">
              <PlayArrowIcon /> &nbsp;Lecture
            </button>
            <button className="banner__button">
              <InfoIcon /> &nbsp;Plus d'infos
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
