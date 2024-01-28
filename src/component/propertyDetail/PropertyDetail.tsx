import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPropertyByIdApi } from "../../lib/Property.api";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./propertyDetail.css";
import { FaArrowLeft } from "react-icons/fa";

const PropertyDetail = () => {
  //?Taking the Id from the url
  const prams = useParams();
  const propetyId = prams.id;

  //?calling the query for property through id
  const { data } = useQuery({
    queryKey: ["Property-Detail-id"],
    queryFn: () => getPropertyByIdApi(propetyId),
  });
  // console.log(data);
  const propertydata = data?.data;

  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "5rem" }}>
      <Button
        variant="light"
        className="d-flex  align-items-center "
        style={{ gap: "0.3rem" }}
        onClick={() => navigate("/home")}
      >
        <FaArrowLeft /> Back to Home
      </Button>
      <Container className="border border-secondary rounded mt-4  ">
        <Row>
          <Col className="py-5 pl-5 d-flex " style={{ gap: "1rem" }}>
            <img
              src={
                propertydata?.productImage ||
                "https://res.cloudinary.com/diwtmwthg/image/upload/v1699099093/owv2egif3ymexpyx27kz.jpg"
              }
              alt=""
              className="w-50"
            />
            {/* //?Secondary Image/  */}
            <div
              className="d-flex flex-column propertySecondaryImage"
              style={{ gap: "1rem" }}
            >
              <img
                src="https://res.cloudinary.com/diwtmwthg/image/upload/v1698984919/ivjhjvucv5umokj0w2ze.jpg"
                alt="A"
              />
              <img
                src="https://res.cloudinary.com/diwtmwthg/image/upload/v1698984849/rfcrfyreutsnk3fbbzr7.jpg"
                alt="B"
              />
              <img
                src="https://res.cloudinary.com/diwtmwthg/image/upload/v1699633578/tjwqrhbw2zjlafioubv0.jpg"
                alt="C"
              />
            </div>
          </Col>
          <Col className="pt-5 d-flex flex-column " style={{ gap: "1.2rem" }}>
            <h1>{propertydata?.propertyName}</h1>
            <h5>${propertydata?.price}</h5>

            <h4>{propertydata?.description}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyDetail;
