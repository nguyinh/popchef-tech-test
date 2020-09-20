const { Client } = require("pg");
const client = new Client();

const init = async () => {
  try {
    await client.connect();

    console.log("[Postgres] Connection success ✅");
  } catch (err) {
    console.error("[Postgres] Connection failed ❌" + err);
  }
};

init();

module.exports = client;