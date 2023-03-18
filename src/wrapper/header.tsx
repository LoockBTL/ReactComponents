import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light">
          React Components List
        </Navbar.Brand>
        <NavLink
          to="/"
          className="text-light me-3"
          style={{ textDecoration: "none" }}
        >
          Main Page
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Header;
