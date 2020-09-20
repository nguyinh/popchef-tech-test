const { Client } = require("pg");
const client = new Client();
const { logger } = require("../middlewares");

const init = async () => {
  try {
    await client.connect();

    logger.info("[POSTGRES] Connection success ✅");
  } catch (err) {
    logger.error("[Postgres] Connection failed ❌" + err);
  }
};

init();

module.exports = {
  client,
  products: require('./products'),
  users: require('./users')
}