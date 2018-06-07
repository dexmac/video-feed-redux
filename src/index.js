import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import store from "./store/store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
