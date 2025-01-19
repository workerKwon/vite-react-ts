import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import "./styles/main.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App>
        <h1>Hello World</h1>
      </App>
    </StrictMode>
  );
}
