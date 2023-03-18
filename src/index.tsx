import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./global.css";
import Wrapper from "./wrapper/wrapper";

// Future

// Chess
// Turnament generator table
// Online chat
// Game "Live"
// Calendar with todos

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Wrapper>
      <App />
    </Wrapper>
  </BrowserRouter>
);
