import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Main: FC = () => {
  return (
    <Container className="d-flex flex-wrap">
      <NavLink to="/card-memory-game" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Card Memory Game</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/drag-and-drop" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Drag And Drop</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/change-wallet" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Change Wallet</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/change-language" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Change Language</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/qr-bar-code-generator" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Qr And Bar Code Generator</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/color-generator" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Color Generator</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/password-generator" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Password Generator</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/text-generator" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Text Generator</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/todo" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Todo List</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/timer" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Timer</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/validation" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Validation Checker</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
      <NavLink to="/weather" className="m-3">
        <Card className="w-100">
          <Card.Header>
            <Card.Title>Weather</Card.Title>
          </Card.Header>
        </Card>
      </NavLink>
    </Container>
  );
};

export default Main;
