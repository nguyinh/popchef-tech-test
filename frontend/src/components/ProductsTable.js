import React from "react";
import { Button, Table, Rating, Label } from "semantic-ui-react";
import COLORS from "../constants/colors";
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const ProductsTable = ({ products, productEdition, productRemove }) => {
  let labelCategories = products.map(({ category }) => capitalize(category));
  labelCategories = Array.from(new Set(labelCategories));
  labelCategories = labelCategories.map((cat, i) => ({ label: cat, color: COLORS[i] ||' gray' }));

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
            <Table.Cell>{capitalize(product.label)}</Table.Cell>
            <Table.Cell>{`${product.price}€`}</Table.Cell>
            <Table.Cell>
              <Rating
                icon="star"
                defaultRating={product.rating / 2}
                maxRating={5}
              />
            </Table.Cell>
            <Table.Cell>
              <Label color={labelCategories.find(cat => cat.label === capitalize(product.category)).color} horizontal>
                {capitalize(product.category)}
              </Label>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => productEdition(product)}>Modifier</Button>
              <Button onClick={() => productRemove(product.id)}>
                Supprimer
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductsTable;
