import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";
import "./home.css";
import { useQuery } from "react-query";
import { getPropertyApi } from "../../lib/Property.api";
import { useNavigate } from "react-router-dom";
const SaleHouseCard = () => {
  //?Navigate
  const navigate = useNavigate();

  //?React Query
  const { data } = useQuery({
    queryKey: ["sale-detail called"],
    queryFn: () =>
      getPropertyApi({
        page: 1,
        limit: 3,
        type: "sell",
      }),
  });

  return (
    <div
      style={{ paddingTop: "2rem" }}
      className="container"
      onClick={() => navigate("/sale")}
    >
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
        {data?.data.map((item: any) => {
          return (
            <Card style={{ width: "18rem" }} className="hover-card-Rent">
              <Card.Img variant="top" src={HouseCard} />
              <Card.Body>
                <Card.Title>{item?.propertyName}</Card.Title>
                <Card.Text>{item?.description.slice(0, 40) + "..."}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Location : {item?.location}</ListGroup.Item>
                <ListGroup.Item>Price:${item?.price}</ListGroup.Item>
              </ListGroup>
              {/* <Card.Body>
                <Button style={{ padding: "0.5 1rem" }}>
                  <a href="#" style={{ color: "white" }}>
                    View
                  </a>
                </Button>
              </Card.Body> */}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SaleHouseCard;
