const Details = ({ params, movies }) => {
  const movie = movies.find((elt) => elt.title === params.title);
  console.log({ movies });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <iframe
          width="420"
          height="315"
          src={movie?.trailer}
          frameborder="5"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", textAlign: "center", width: 400 }}>
          {movie?.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
