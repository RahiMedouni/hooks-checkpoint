import ReactStars from "react-rating-stars-component";
import { Card, Button } from "react-bootstrap";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div>
      <div>
        <Card
          style={{
            width: "18rem",
            color: "black",
            background: "rgb(0,89,255,0.5)",
          }}
        >
          <Card.Body className="cccc">
            <Card.Img
              variant="top"
              src={props.movie.posterUrl}
              style={{ height: "300px" }}
            />
            <Card.Title>{props.movie.title}</Card.Title>

            <Card.Text>{props.movie.description}</Card.Text>
            <Card.Text>
              <ReactStars
                count={5}
                ishalf={true}
                size={24}
                activeColor="#ffd700"
                value={props.movie.rate.toFixed(1)}
              />
            </Card.Text>
            <Link to={"/movielist/" + props.movielist.id}>
              <Button variant="primary">See Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
