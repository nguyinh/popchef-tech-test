const products = require('../controllers');

const routes = (app) => {
    app.get('/products', products.get);

    app.post('/products', products.post);
};

module.exports = routes;