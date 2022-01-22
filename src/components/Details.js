const Details = ({ detail, movies }) => {
  const movie = movies.find((elt) => elt.title === detail.params.title);
  return <div>{movie.description}</div>;
};

export default Details;
