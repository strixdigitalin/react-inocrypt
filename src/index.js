import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      {/* <div> we are calling function here---</div> */}
      <App />
      {/* <h1>hello</h1> */}
    </React.StrictMode>
  </>
);
