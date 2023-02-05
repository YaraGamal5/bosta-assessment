import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const loadingMarkup = (
  <div align="center" className="py-4 text-center">
    <CircularProgress />
  </div>
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={loadingMarkup}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
