import React, { useEffect, useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { fetchProducts } from "./services";
import { ProductsTable } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    setProducts(await fetchProducts());
  }, []);

  return (
    <div className="App">
      <ProductsTable products={products} />
    </div>
  );
};

export default App;
