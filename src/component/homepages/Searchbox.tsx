import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./home.css";
const Searchbox = () => {
  return (
    <div className="parentDivFirstSection">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backdropFilter: "blur(5px)",
          height: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            // color: "#FFECD6",
            color: "white",
            fontSize: "40px",
          }}
        >
          Agents. Tours. Loans. Homes.
        </h1>
        <div
          style={{
            marginTop: "2rem",

            width: "50%",
          }}
        >
          <InputGroup className="mb-3">
            <Form.Control
              style={{
                height: "3rem",
                background: "#f5f7f8",
              }}
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{
                background: "#f5f7f8",
                border: "none",
                borderRadius: "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                color="#3559E0"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
