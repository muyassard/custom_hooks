import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./navbar";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes />
    </QueryParamProvider>
  </BrowserRouter>
);
