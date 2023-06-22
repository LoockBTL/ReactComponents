import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const linkRefs = [
  { path: "/card-memory-game", name: "Card Memory Game" },
  { path: "/drag-and-drop", name: "Drag And Drop" },
  { path: "/change-wallet", name: "Change Wallet" },
  { path: "/change-language", name: "Change Language" },
  { path: "/qr-bar-code-generator", name: "Qr And Bar Code Generator" },
  { path: "/color-generator", name: "Color Generator" },
  { path: "/password-generator", name: "Password Generator" },
  { path: "/text-generator", name: "Text Generator" },
  { path: "/todo", name: "Todo List" },
  { path: "/timer", name: "Timer" },
  { path: "/validation", name: "Validation Checker" },
  { path: "/weather", name: "Weather" },
];

const generateColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
};

const Main: FC = () => {
  return (
    <Container className="d-flex flex-wrap">
      <div className="grid-main">
        {linkRefs.map((obj) => {
          return (
            <NavLink style={{ textDecoration: "none" }} to={obj.path}>
              <div
                className="grid-plate"
                style={{ backgroundColor: generateColor() }}
              >
                {obj.name}
              </div>
            </NavLink>
          );
        })}
      </div>
      <div style={{ display: "none" }}>
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
      </div>
    </Container>
  );
};

export default Main;
