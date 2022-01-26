import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <div className="fixFlow">
      {props.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
