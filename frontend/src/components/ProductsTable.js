import React from "react";
import { Button, Table, Rating } from "semantic-ui-react";

const ProductsTable = ({ products, productEdition, productRemove }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nom du plat</Table.HeaderCell>
          <Table.HeaderCell>Prix</Table.HeaderCell>
          <Table.HeaderCell>Note</Table.HeaderCell>
          <Table.HeaderCell>Categorie</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product) => (
          <Table.Row key={product.id}>
            <Table.Cell>{product.label}</Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
            <Table.Cell><Rating icon='star' defaultRating={product.rating/2} maxRating={5} /></Table.Cell>
            <Table.Cell>{product.category}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => productEdition(product)}>Modifier</Button>
              <Button onClick={() => productRemove(product.id)}>Supprimer</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductsTable;
