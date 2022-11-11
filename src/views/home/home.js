import React, { useEffect } from "react";
import MovieListing from "../movieListing/movieListing"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice"
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
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
