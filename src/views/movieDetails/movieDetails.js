import React from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAsyncMovieOrShowDetails, getSelectMovieOrShowDetails } from "../../features/movies/movieSlice"
import "./movieDetails.css"
const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShowDetails)
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID))
  }, [imdbID, dispatch])
  console.log("eachselect", data)


  return <div className="movieSection">
    <div className="sectionLeft">
      <h1 className="MovieTitle">
        {data.Title}
      </h1>
      <h3>{data.Plot}</h3>
      <div className="flexingtwodets">
        <div className="movieRating">
          <span className="bolding">IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}</span>
          <span className="bolding">IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}</span>
          <span className="bolding">Runtime <i className="fa fa-film"></i> : {data.Runtime}</span>
          <span className="bolding">Release Year <i className="fa fa-calendar"></i> : {data.Year}</span>
        </div>
        <div className="movieInfo">
          <div>
            <span className="bolding">Director : </span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span className="bolding">Actors : </span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span className="bolding">Genre : </span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span className="bolding">Languages : </span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span className="bolding">Awards : </span>
            <span>{data.Awards}</span>
          </div>
          <div>
            <span className="bolding">Box Office: </span>
            <span>{data.BoxOffice}</span>
          </div>
          <div>
            <span className="bolding">Metascore: </span>
            <span>{data.Metascore}</span>
          </div>
          <div>
            <span className="bolding">Rated: </span>
            <span>{data.Rated}</span>
          </div>
          {/* <div>
            <span className="bolding">{data.Ratings[0].Source}: </span>
            <span>{data.Ratings[0].Value}</span>
          </div> */}
        </div>
      </div>
    </div>
    <div className="sectionRight">
      <img src={data.Poster} alt="poster" />
    </div>
  </div>;
};

export default MovieDetails;
