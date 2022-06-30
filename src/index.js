import React from "react";
import ReactDOM from "react-dom/client";
import "twopi-rest/dist/index.css";
import "./index.css";
import App from "./App";
import { QuizContextProvider } from "./context/QuizContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./backend/server";
import { AuthContextProvider } from "./context/AuthContext";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
