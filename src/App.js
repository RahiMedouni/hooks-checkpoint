import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// const Movie = (props) =>{

//   let params = useParams();

//   return <h1>movie title : {params.id} </h1>
// }

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      title: "peaky blinders",
      posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
      rate: 5,
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    },
    {
      id: Math.random(),
      title: "Game of thrones",
      posterUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      rate: 4.3,
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
    },
    {
      id: Math.random(),
      title: "The good doctor",
      posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      rate: 3.2,
      description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      trailer: "https://www.youtube.com/embed/msJggy8xtmI",
    },
  ]);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const MoviesList = () => {
    return (
      <div>
        <MovieList
          movies={movies.filter(
            (movie) =>
              movie.title.toUpperCase().includes(title.toUpperCase()) &&
              movie.rate >= rate
          )}
        />
        <AddMovie handleAdd={handleAdd} />
      </div>
    );
  };
  return (
    <div>
      <div>
        <Filter
          title={title}
          handleChange={handleChange}
          rate={rate}
          ratingChanged={ratingChanged}
        />
      </div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<Movie movie={movies} />} />
      </Routes>
    </div>
  );
}

export default App;

// We will add a description and the trailer link (embed video link) to the object movie.

// Every time I click on a movie card, it will take me to the movie description and trailer page.

// In the description page, I can navigate back to the home page.
