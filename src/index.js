import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/product-context";
import FilterProvider from "./context/filter-context";

ReactDOM.render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>,
  document.getElementById("root")
);
