import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

const ProductEdit = ({ selected = {}, resetModal, submitProduct }) => {
  const [label, setLabel] = useState(selected.label || "");
  const [price, setPrice] = useState(selected.price || "");
  const [rating, setRating] = useState(selected.rating || "");
  const [category, setCategory] = useState(selected.category || "");

  return (
    <Modal open>
      <Modal.Header>Product edit</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Nom du plat</label>
            <input placeholder="" onChange={(e) => setLabel(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Prix</label>
            <input placeholder="" onChange={(e) => setPrice(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Note</label>
            <input placeholder="" onChange={(e) => setRating(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Categorie</label>
            <input
              placeholder=""
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
          onClick={() => submitProduct({label, price, rating, category})}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProductEdit;
