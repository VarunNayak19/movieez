import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../../components/movieCard/movieCard"
import './movieListing.css'
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return (
        <MovieCard index={index} data={movie} />
      )
    })
  ) : (<div className="moviesError"><h3>{movies.Error}</h3 ></div >);

  renderShows = shows.Response === "True" ? (
    shows.Search.map((shows, index) => {
      return (
        <MovieCard index={index} data={shows} />
      )
    })
  ) : (<div className="moviesError"><h3>{shows.Error}</h3 ></div >);

  return <div className="movieWrapper">
    <div className="movieList">
      <h2>Movies</h2>
      <div className="MovieContainer">{renderMovies}</div>
    </div>
    <div className="movieList">
      <h2>Series and Shows</h2>
      <div className="MovieContainer">{renderShows}</div>
    </div>
  </div>;
};

export default MovieListing;
