import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TicketContextProvider } from "./context/TicketContext";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicketContextProvider>
      <App />
    </TicketContextProvider>
  </React.StrictMode>
);
