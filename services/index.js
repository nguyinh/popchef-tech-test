const { Client } = require("pg");
const client = new Client();
const { logger } = require("../middlewares");

const TABLE = process.env.ENV === "dev" ? "popchef_test.products" : "TBD";

exports.findAll = async () => {
  const text = `SELECT * FROM ${TABLE}`;
  const result = await client.query(text);
  return result;
};

const init = async () => {
  try {
    await client.connect();

    logger.info("[POSTGRES] Connection success ✅");
  } catch (err) {
    logger.error("[Postgres] Connection failed ❌" + err);
  }
};

init();
