import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import addIcon from "../../assets/svg/addIcon.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaCartArrowDown } from "react-icons/fa";
import "./navbar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
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
      }}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-textColor">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0  ">
            {/* //?home */}
            <Nav.Link
              href="/home"
              className="navbar-textColor after-nav m-auto"
            >
              Home
            </Nav.Link>
            {/* //?About  */}
            <Nav.Link href="#" className="navbar-textColor after-nav m-auto">
              About
            </Nav.Link>
            {/* //?Rent  */}
            {role === "buyer" && (
              <Nav.Link
                href="/rent"
                className="navbar-textColor after-nav m-auto"
              >
                Rent
              </Nav.Link>
            )}
            {/* //?sale */}
            {role === "buyer" && (
              <Nav.Link
                href="/sale"
                className="navbar-textColor after-nav m-auto"
              >
                Buy
              </Nav.Link>
            )}
            {/* //?view seller Property */}
            {role == "seller" && (
              <Nav.Link
                href="/property"
                className="navbar-textColor after-nav m-auto"
              >
                Property
              </Nav.Link>
            )}
            {/* //?Button add property  */}
            {role == "seller" && (
              <Nav.Link className="navbar-textColor font-weight-bold m-auto">
                <Button onClick={() => navigate("/addProperty")}>
                  AddProperty
                </Button>
              </Nav.Link>
            )}
            {/* //?Button Cart  */}
            {role == "buyer" && (
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
