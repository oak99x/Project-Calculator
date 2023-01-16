import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculador from "./main/Calculator";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div>
        <h2> Calculadora </h2>
        <h6>
          Projeto Calculadora, neste contamos com o uso de JavaScript, HTML, CSS, React.
        </h6>
        <h6>
          A ideia para por em prática os fundamentos após o estudo básico sobre a
          biblioteca React.
        </h6>
      </div>

      <Calculador />
    </div>
    
  </React.StrictMode>
);

reportWebVitals();
