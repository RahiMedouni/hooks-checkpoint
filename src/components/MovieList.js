import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div>
          <MovieCard movie={movie} key={index} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
