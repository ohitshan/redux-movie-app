import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/setting";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    Object.keys(movies).length === 0 ? (
      <div>...Loading</div>
    ) : movies.Response === "True" ? (
      <Slider {...Settings}>
        {movies.Search.map((movie, i) => (
          <MovieCard key={i} data={movie} />
        ))}
      </Slider>
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    Object.keys(shows).length === 0 ? (
      <div>...Loading</div>
    ) : shows.Response === "True" ? (
      <Slider {...Settings}>
        {shows.Search.map((movie, i) => (
          <MovieCard key={i} data={movie} />
        ))}
      </Slider>
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;
