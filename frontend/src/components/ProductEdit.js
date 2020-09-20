import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";

const ProductEdit = () => {
  return (
    <Modal open>
      <Modal.Header>Product edit</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Nom du plat</label>
            <input placeholder="" />
          </Form.Field>

          <Form.Field>
            <label>Prix</label>
            <input placeholder="" />
          </Form.Field>

          <Form.Field>
            <label>Note</label>
            <input placeholder="" />
          </Form.Field>

          <Form.Field>
            <label>Categorie</label>
            <input placeholder="" />
          </Form.Field>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button
          color="black"
          // onClick={}
        >
          Annuler
        </Button>
        <Button
          content="Valider"
          labelPosition="right"
          icon="checkmark"
          //   onClick={}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProductEdit;
