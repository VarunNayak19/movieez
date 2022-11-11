import "./App.css";
import { Routes, Route } from "react-router-dom"
import Header from "./components/header/header";
import Home from "./views/home/home";
import MovieDetails from '../src/views/movieDetails/movieDetails'
import Error from '../src/views/error/error'
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
