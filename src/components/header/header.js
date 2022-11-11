import { useState } from "react";
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
  const [term, setterm] = useState("")
  const submitHandler = () => {

  }
  return <div className="header">
    <Link to="/" className="removeLinkdecoration">
      <div className="logo">
        <span>
          Movieeez
</span>
        <img src={require("../../assets/movielogo.png")} alt="icn" />
      </div>
    </Link>
    <form className="searchBarDiv" onSubmit={submitHandler}>
      <input type="text" className="searchBar" placeholder="Search..." value={term} onChange={(e) => setterm(e.target.value)} />
      <button className="positioning" type="submit"><i class="fa-solid fa-magnifying-glass glass"></i></button>
    </form>
    <div className="userImage">
      <img src={require("../../assets/userLogo.png")} alt="icn" />
    </div>
  </div>;
};

export default Header;
