import React, { useEffect } from "react";
import MovieListing from "../movieListing/movieListing"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice"
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  const movieText = localStorage.getItem("lastsearch");
  const showText = localStorage.getItem("lastsearch");
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch])
  return (
    <div>
      <div className="banerImage">

      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
