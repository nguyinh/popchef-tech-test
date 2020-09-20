const { Client } = require("pg");
const client = new Client();
const { logger } = require("../middlewares");

const TABLE = process.env.ENV === "dev" ? "popchef_test.products" : "TBD";

exports.findAll = async () => {
  const text = `SELECT * FROM ${TABLE}`;
  const result = await client.query(text);
  return result;
};

exports.add = async (label, price, rating, category) => {
  const text = `INSERT INTO ${TABLE}(label, price, rating, category) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [label, price, rating, category];
  const result = await client.query(text, values);
  return result;
};

exports.update = async (id, label, price, rating, category) => {
  const text = `UPDATE ${TABLE} SET label=$2, price=$3, rating=$4, category=$5 WHERE id=$1 RETURNING *`;
  const values = [id, label, price, rating, category];
  const result = await client.query(text, values);
  return result;
};

exports.remove = async (id) => {
    const text = `DELETE FROM ${TABLE} WHERE id=$1 RETURNING *`;
    const values = [id];
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
