const products = require('../controllers');

const routes = (app) => {
    app.get('/products', products.get);

    app.post('/products', products.post);

    app.put('/products', products.put);
};

module.exports = routes;