import React, { useEffect, useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Dimmer, Loader, Segment } from "semantic-ui-react";
import { fetchProducts, addProduct, updateProduct } from "./services";
import { ProductsTable, ProductEdit } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const productCreation = () => {
    setIsModalOpen(true);
  };

  const productEdition = (product) => {
    setSelected(product);
    setIsModalOpen(true);
  };

  const submitProduct = async (product) => {
    setIsLoading(true);
    setIsModalOpen(false);
    if (product.id)
      await updateProduct(
        product.id,
        product.label,
        product.price,
        product.rating,
        product.category
      );
    else
      await addProduct(
        product.label,
        product.price,
        product.rating,
        product.category
      );

    setProducts(await fetchProducts());
    setIsLoading(false);
    resetModal();
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setSelected({});
  };

  useEffect(async () => {
    setIsLoading(true);
    setProducts(await fetchProducts());
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Segment>
        <Dimmer active={isLoading}>
          <Loader />
        </Dimmer>

        <Button onClick={productCreation}>Ajouter un plat</Button>
        <ProductsTable products={products} productEdition={productEdition} />
      </Segment>

      {isModalOpen && (
        <ProductEdit
          selected={selected}
          submitProduct={submitProduct}
          resetModal={resetModal}
        />
      )}
    </div>
  );
};

export default App;
