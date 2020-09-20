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
