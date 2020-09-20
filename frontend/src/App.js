import React, { useEffect, useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { fetchProducts, addProduct } from "./services";
import { ProductsTable, ProductEdit } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productCreation = () => {
    setIsModalOpen(true);
  };

  const submitProduct = async (product) => {
    setIsModalOpen(false);
    await addProduct(product.label, product.price, product.rating, product.category);

    setProducts(await fetchProducts());
  };

  const resetModal = () => {
    setIsModalOpen(false);
  };

  useEffect(async () => {
    setProducts(await fetchProducts());
  }, []);

  return (
    <div className="App">
      <Button onClick={productCreation}>Ajouter un plat</Button>
      <ProductsTable products={products} />

      {isModalOpen && (
        <ProductEdit submitProduct={submitProduct} resetModal={resetModal} />
      )}
    </div>
  );
};

export default App;
