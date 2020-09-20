const Boom = require('@hapi/boom');
const { logger } = require("../middlewares");
const products = require("../services");

exports.get = async (req, res, next) => {
  logger.info(`[PRODUCTS] get`);

  try {
    const result = await products.findAll();

    return res.send(result.rows);
  } catch (err) {
    return next(err);
  }
};

exports.post = async (req, res, next) => {
  const { label, price, rating, category } = req.query;

  logger.info(`[PRODUCTS] post | ${label}, ${price}, ${rating}, ${category}`);

  if (!label || !price || !rating || !category)
    return next(Boom.badRequest("Missing parameters"));
  try {
    const result = await products.add(label, price, rating, category);

    return res.send(result.rows);
  } catch (err) {
    return next(err);
  }
};
