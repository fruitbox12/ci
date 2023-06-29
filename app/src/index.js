import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { EdgeStateProvider } from "./edge_state";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<>
    <iframe src="https://mesh-xi.vercel.app/" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; border: none; z-index: -1;"></iframe>
  <React.StrictMode>
    <EdgeStateProvider>
      <App />
    </EdgeStateProvider>
  </React.StrictMode>,
  document.getElementById("root")<>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
