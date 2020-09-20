import React, { useEffect } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { fetchProducts } from "./services";

const App = () => {
  useEffect(async () => {
    await fetchProducts();
  }, []);
  return <div className="App">hello</div>;
};

export default App;
