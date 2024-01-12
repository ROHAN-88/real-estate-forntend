import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";
import "./home.css";
const SaleHouseCard = () => {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <h3 style={{ textAlign: "center" }}>House On Sale </h3>
      <div
        className="d-flex flex-sm-column flex-lg-row flex-wrap justify-content-center align-items-center mt-1 mb-5 container  "
        style={{
          gap: "2rem",
          background: "#F0ECE5",
          padding: "1rem 0",
          borderRadius: "20px",
        }}
      >
        <Card style={{ width: "18rem" }} className="hover-card-Rent">
          <Card.Img variant="top" src={HouseCard} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Location : "Shakhamul"</ListGroup.Item>
            <ListGroup.Item>Price:$200</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button style={{ padding: "0.5 1rem" }}>
              <a href="#" style={{ color: "white" }}>
                View
              </a>
            </Button>
          </Card.Body>
        </Card>
        {/* //!card2  */}
        <Card style={{ width: "18rem" }} className="hover-card-Rent">
          <Card.Img variant="top" src={HouseCard} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Location : "Shakhamul"</ListGroup.Item>
            <ListGroup.Item>Price:$200</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button style={{ padding: "0.5 1rem" }}>
              <a href="#" style={{ color: "white" }}>
                View
              </a>
            </Button>
          </Card.Body>
        </Card>

        {/* //!card3  */}
        <Card style={{ width: "18rem" }} className="hover-card-Rent">
          <Card.Img variant="top" src={HouseCard} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Location : "Shakhamul"</ListGroup.Item>
            <ListGroup.Item>Price:$200</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button style={{ padding: "0.5 1rem" }}>
              <a href="#" style={{ color: "white" }}>
                View
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SaleHouseCard;
