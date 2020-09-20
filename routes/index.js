const { products, users } = require("../controllers");

const routes = (app) => {
  app.get("/products", products.get);

  app.post("/products", products.post);

  app.put("/products", products.put);

  app.delete("/products", products.delete);

  app.post("/users", users.post);
};

module.exports = routes;
