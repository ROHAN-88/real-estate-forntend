import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";

const SalePage = () => {
  return (
    <>
      <Container>
        <Row>
          {/* //todo map the query   */}
          <Col style={{ marginTop: "6rem" }}>
            <Card style={{ width: "18rem" }} className="hover-card-Rent">
              <Card.Img variant="top" src={HouseCard} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalePage;
