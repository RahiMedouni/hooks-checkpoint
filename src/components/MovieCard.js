import ReactStars from "react-rating-stars-component";
import { Card, Button } from "react-bootstrap";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <Card
      style={{
        maxWidth: 300,
        color: "black",
        background: "rgb(0,89,255,0.5)",
        margin: 5,
      }}
    >
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.movie.posterUrl}
          style={{ height: "300px" }}
        />
        <Card.Title className="hideText">{props.movie.title}</Card.Title>

        <p className="hideText">{props.movie.description}</p>
        <Card.Text>
          <ReactStars
            count={5}
            ishalf={true}
            size={24}
            activeColor="#ffd700"
            value={props.movie.rate.toFixed(1)}
          />
        </Card.Text>
        <Link to={"/movielist/" + props.movie.title}>
          <Button variant="outline-danger">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
