import { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "./header.css"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [term, setterm] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setterm("")
    localStorage.setItem("lastsearch", term)

  }
  return (<div className="header">
    <div className="headerContainer">
      <Link to="/" className="removeLinkdecoration">
        <div className="logo">
          <span>
            Movieeez
          </span>
          <img src={require("../../assets/movielogo.png")} alt="icn" />
        </div>
      </Link>
      <form className="searchBarDiv web" onSubmit={submitHandler}>
        <input type="text" className="searchBar" placeholder="Search..." value={term} onChange={(e) => setterm(e.target.value)} />
        <button className="positioning" type="submit"><i class="fa-solid fa-magnifying-glass glass"></i></button>
      </form>
      <div className="userImage">
        <img src={require("../../assets/userLogo.png")} alt="icn" />
      </div>
    </div>
    <form className="searchBarDiv mobile" onSubmit={submitHandler}>
      <input type="text" className="searchBar" placeholder="Search..." value={term} onChange={(e) => setterm(e.target.value)} />
      <button className="positioning" type="submit"><i class="fa-solid fa-magnifying-glass glass"></i></button>
    </form>
  </div>);
};

export default Header;
