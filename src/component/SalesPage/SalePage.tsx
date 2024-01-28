import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";
import { useQuery } from "react-query";
import { getPropertyApi } from "../../lib/Property.api";

const SalePage = () => {
  //?Query
  const { data } = useQuery({
    queryKey: ["Get-property-detail"],
    queryFn: (values) =>
      getPropertyApi({
        page: 1,
        limit: 10,
        type: "sell",
      }),
  });
  const propertyData = data?.data;
  return (
    <>
      <Container onClick={() => console.log("first")}>
        <Row>
          {}
          {/* //todo map the query   */}
          {propertyData?.map((item: any) => {
            return (
              <Col style={{ marginTop: "6rem" }}>
                <Card style={{ width: "18rem" }} className="hover-card-Rent">
                  <Card.Img variant="top" src={HouseCard} />
                  <Card.Body>
                    <Card.Title>{item.propertyName}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Location :{item.location}</ListGroup.Item>
                    <ListGroup.Item>Price:${item.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button style={{ padding: "0.5 1rem" }}>View</Button>
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

export default SalePage;
