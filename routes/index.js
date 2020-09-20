const products = require('../controllers');

const routes = (app) => {
    app.get('/products', products.get);
};

module.exports = routes;