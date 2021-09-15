import ReactDOM from "react-dom";

import { App } from "./App";


document.body.style.backgroundColor = "black";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
);
