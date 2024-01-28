import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillBulb } from "react-icons/ai";
import { FaCartArrowDown, FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { AiTwotoneTags } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import "./navbar.css";
const Navbar2 = () => {
  //?useState for changing icons in navbar
  const [iconHome, seticonHome] = useState(false);
  const [iconAbout, setIconAbout] = useState(false);
  const [iconPorperty, setIconProperty] = useState(false);
  const [iconRent, setIconRent] = useState(false);
  const [iconBuy, setIconBuy] = useState(false);

  //?navigation
  const navigate = useNavigate();

  //?get role from the localstorage
  const role = localStorage.getItem("role");

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        background: "#4682A9",
        position: "fixed",
        top: "0",
        // right: "0",
        width: "100%",
        left: "0",
        zIndex: "999",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-textColor  ">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0  ">
            {/* //?home */}
            <Nav.Link
              href="/home"
              className="navbar-textColor m-auto"
              style={{
                width: "60px",
                textAlign: "center",
              }}
              onMouseOver={() => seticonHome(true)}
              onMouseOut={() => seticonHome(false)}
            >
              {iconHome == true ? (
                <FaHome
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  className="animationHoverNav"
                />
              ) : (
                " Home"
              )}
            </Nav.Link>
            {/* //?About  */}
            <Nav.Link
              href="#"
              className="navbar-textColor m-auto"
              style={{
                width: "60px",
                textAlign: "center",
              }}
              onMouseOver={() => setIconAbout(true)}
              onMouseOut={() => setIconAbout(false)}
            >
              {iconAbout ? (
                <AiFillBulb
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  className="animationHoverNav"
                />
              ) : (
                "About"
              )}
            </Nav.Link>
            {/* //?Rent  */}
            {role === "buyer" && (
              <Nav.Link
                href="/rent"
                className="navbar-textColor  m-auto"
                style={{
                  width: "60px",
                  textAlign: "center",
                }}
                onMouseOver={() => setIconRent(true)}
                onMouseOut={() => setIconRent(false)}
              >
                {iconRent ? (
                  <AiTwotoneTags
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    className="animationHoverNav"
                  />
                ) : (
                  "Rent"
                )}
              </Nav.Link>
            )}
            {/* //?sale */}
            {role === "buyer" && (
              <Nav.Link
                href="/sale"
                className="navbar-textColor m-auto"
                style={{
                  width: "60px",
                  textAlign: "center",
                }}
                onMouseOver={() => setIconBuy(true)}
                onMouseOut={() => setIconBuy(false)}
              >
                {iconBuy ? (
                  <AiOutlineDollarCircle
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    className="animationHoverNav"
                  />
                ) : (
                  "Buy"
                )}
              </Nav.Link>
            )}
            {}
            {/* //?view seller Property */}
            {role === "seller" && (
              <Nav.Link
                href="/property"
                className="navbar-textColor  m-auto"
                style={{
                  width: "70px",
                  textAlign: "center",
                }}
                onMouseOver={() => setIconProperty(true)}
                onMouseOut={() => setIconProperty(false)}
              >
                {iconPorperty ? (
                  <GiFamilyHouse
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    className="animationHoverNav"
                  />
                ) : (
                  "Property"
                )}
              </Nav.Link>
            )}
            {/* //?Button add property  */}
            {role === "seller" && (
              <Nav.Link className="navbar-textColor font-weight-bold m-auto">
                <Button onClick={() => navigate("/addProperty")}>
                  AddProperty
                </Button>
              </Nav.Link>
            )}
            {/* //?Button Cart  */}
            {role === "buyer" && (
              <Nav.Link className="navbar-textColor font-weight-bold m-auto">
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaCartArrowDown /> Cart
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
