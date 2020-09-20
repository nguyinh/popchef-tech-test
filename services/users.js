const { client } = require("./index");
const { logger } = require("../middlewares");

const TABLE = process.env.ENV === "dev" ? "popchef_test.users" : "TBD";

exports.find = async (pseudo) => {
  const text = `SELECT * FROM ${TABLE}`;
  const result = await client.query(text);
  return result;
};

exports.add = async (pseudo, hash) => {
  const text = `INSERT INTO ${TABLE}(pseudo, hash) VALUES ($1, $2) RETURNING *`;
  const values = [pseudo, hash];
  const result = await client.query(text, values);
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
