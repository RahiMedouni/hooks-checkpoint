import React from "react";
import { Navbar, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ title, handleChange, rate, ratingChanged }) => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="light"
        className="d-flex justify-content-around"
      >
        <Navbar.Brand href="#home">
          Hooks and Router Checkpoints...
        </Navbar.Brand>
        <div className="related_links">
          <ul className="menu"></ul>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              onChange={handleChange}
              value={title}
            />
          </div>
          <div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
              value={rate}
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Filter;
