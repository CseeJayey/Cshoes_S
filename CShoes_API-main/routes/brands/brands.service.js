const db = require("_helpers/db");

module.exports = {
  getAll,
};

async function getAll() {
  const data = await db.Brands.findAll();
  return data;
}
