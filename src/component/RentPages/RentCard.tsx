import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";
import { useQuery } from "react-query";
import { getPropertyApi } from "../../lib/Property.api";
const RentCard = () => {
  //?Query

  const { data } = useQuery({
    queryKey: ["Get-property-detail"],
    queryFn: (values) =>
      getPropertyApi({
        page: 1,
        limit: 10,
      }),
  });
  const propertyData = data?.data;

  return (
    <>
      <Container>
        <Row>
          {propertyData?.map((item: any, index: any) => {
            return (
              <Col style={{ marginTop: "6rem" }} key={item._id}>
                <Card style={{ width: "18rem" }} className="hover-card-Rent">
                  <Card.Img variant="top" src={HouseCard} />
                  <Card.Body>
                    <Card.Title>{item.propertyName}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item> Location : "Shakhamul"</ListGroup.Item>
                    <ListGroup.Item>Price:${item.price}</ListGroup.Item>
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
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default RentCard;
