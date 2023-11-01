const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const mapShoesToJson = data => {
  return {
    id: data.ShoeID,
    price: data.Price,
    name: data.Name,
    brand: data?.Brand.Name,
  };
};

async function getAll() {
  const data = await db.Shoe.findAll();
  const res = data.map(item => mapShoesToJson(item));
  return res;
}

async function getById(id) {
  return await getShoe(id);
}

async function create(params) {
  await db.Shoe.create(params);
}

async function update(id, params) {
  const shoe = await getShoe(id);

  Object.assign(shoe, params);
  await shoe.save();

  return shoe.get();
}

async function _delete(id) {
  const shoe = await getShoe(id);
  await shoe.destroy();
}

async function getShoe(id) {
  const shoe = await db.Shoe.findOne({ where: { ShoeID: id }, include: db.Brands });
  if (!shoe) throw "Shoe not found";
  return mapShoesToJson(shoe);
}
