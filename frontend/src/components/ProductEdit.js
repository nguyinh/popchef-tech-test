import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

const ProductEdit = ({ selected = {}, resetModal, submitProduct }) => {
  const [label, setLabel] = useState(selected.label || "");
  const [price, setPrice] = useState(selected.price || "");
  const [rating, setRating] = useState(selected.rating || "");
  const [category, setCategory] = useState(selected.category || "");
  const [raiseErrors, setRaiseErrors] = useState(false);

  const checkInputs = (product) => {
    if (
      product.label === "" ||
      product.price === "" ||
      product.rating === "" ||
      product.category === ""
    )
      setRaiseErrors(true);
    else submitProduct(product);
  };

  return (
    <Modal open>
      <Modal.Header>
        {selected.id ? `Modification ${selected.label}` : `Ajout d'un plat`}
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            error={
              raiseErrors &&
              label === "" && {
                content: "Can't be blank",
                pointing: "below",
              }
            }
          >
            <label>Nom du plat</label>
            <input
              placeholder=""
              defaultValue={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Form.Field>

          <Form.Field
            error={
              raiseErrors &&
              price === "" && {
                content: "Can't be blank",
                pointing: "below",
              }
            }
          >
            <label>Prix</label>
            <input
              placeholder="€"
              defaultValue={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Field>

          <Form.Field
            error={
              raiseErrors &&
              rating === "" && {
                content: "Can't be blank",
                pointing: "below",
              }
            }
          >
            <label>Note</label>
            <input
              placeholder="/10"
              defaultValue={rating}
              type="number"
              max={10}
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Field>

          <Form.Field
            error={
              raiseErrors &&
              category === "" && {
                content: "Can't be blank",
                pointing: "below",
              }
            }
          >
            <label>Categorie</label>
            <input
              placeholder=""
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button color="black" onClick={resetModal}>
          Annuler
        </Button>
        <Button
          content="Valider"
          labelPosition="right"
          icon="checkmark"
          onClick={() =>
            checkInputs({ id: selected.id, label, price, rating, category })
          }
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProductEdit;
