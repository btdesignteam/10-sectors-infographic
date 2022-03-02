import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/main.scss";

const target = document.querySelector("#infographic");
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    target
);
