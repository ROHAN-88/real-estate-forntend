import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductApi, sellerPropertyApi } from "../../lib/Property.api";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HouseCard from "../../assets/house.jpg";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AllProperty = () => {
  //?naviagtion
  const navigate = useNavigate();
  //?query call
  const { data } = useQuery({
    queryKey: ["Data-property"],
    queryFn: () => sellerPropertyApi(),
  });

  //?mutation
  const query = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["Delete-Product "],
    mutationFn: (id) => deleteProductApi(id),
    onSuccess: (res) => {
      query.invalidateQueries("Data-property");
    },
  });

  //?useState
  const [productId, setProductId] = useState();

  //?popover of the bootstrap
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <div className="px-4">
        <p className="text-center">Do you Want to Delete?</p>
        <div className="d-flex justify-content-center align-items-center ">
          <Button
            className="mr-3"
            onClick={() => {
              mutate(productId);
            }}
          >
            Yes
          </Button>
          <Button
            aria-label="Close"
            className="icon-button"
            onClick={() => document.body.click()}
          >
            No
          </Button>
        </div>
      </div>
    </Popover>
  );
  return (
    <Container style={{ marginTop: "5rem", marginBottom: "2rem" }}>
      <Row>
        {data?.data.map((item: any) => {
          return (
            <Col className="d-flex justify-content-center , align-items-center w-75 mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={HouseCard} />
                <Card.Body>
                  <Card.Title>{item.propertyName}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Location:{item.location} </ListGroup.Item>
                  <ListGroup.Item>For: {item.type}</ListGroup.Item>
                  <ListGroup.Item>
                    Pice:$<b>{item.price}</b>{" "}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex justify-content-end align-items-center ">
                  <Button
                    className="mr-3"
                    onClick={() => navigate(`/property/detail/${item._id}`)}
                  >
                    View
                  </Button>

                  {/* //react popover  */}
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popoverBottom}
                    rootClose
                  >
                    <Button
                      variant="danger"
                      onClick={() => setProductId(item._id)}
                    >
                      <MdDelete style={{ fontSize: "25px" }} />
                    </Button>
                  </OverlayTrigger>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllProperty;
