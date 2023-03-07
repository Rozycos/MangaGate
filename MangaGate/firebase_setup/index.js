import React from "react";
import ReactDOM from "react-dom";

import FirebaseApp from "./FirebaseApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FirebaseApp />
  </React.StrictMode>,
  rootElement
);
