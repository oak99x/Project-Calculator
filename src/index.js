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
        <h2> Calculator </h2>
        <h6>
          Project Calculator, in this we use JavaScript, HTML, CSS, React.
        </h6>
        <h6>
          The idea to put the fundamentals into practice after the basic study of the React library.
        </h6>
      </div>

      <Calculador />
    </div>
    
  </React.StrictMode>
);

reportWebVitals();
