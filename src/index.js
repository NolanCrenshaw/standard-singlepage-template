import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";
import "./styles/index.css";

// // ~~ Google Tag Manager Init
// const tagManagerArgs = {
//   gtmId: "",
// };
// TagManager.initialize(tagManagerArgs);

// ~~ Core Render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
