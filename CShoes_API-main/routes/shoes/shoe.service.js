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
    name: data?.Name,
    brand: data?.Brand,
    urlImg: data?.URL,
  };
};

async function getAll() {
  const data = await db.Shoe.findAll({ include: db.Brands });
  const res = data.map(item => {
    return mapShoesToJson(item.get());
  });
  return res;
}

async function getById(id) {
  const res = await getShoe(id);
  return mapShoesToJson(res.get());
}

async function create(params) {
  await db.Shoe.create(params);
}

async function update(id, params) {
  const shoe = await getShoe(id);
  await shoe.save();
  Object.assign(shoe, params);
  return mapShoesToJson(shoe.get());
}

async function _delete(id) {
  const shoe = await getShoe(id);
  await shoe.destroy();
}

async function getShoe(id) {
  const shoe = await db.Shoe.findOne({ where: { ShoeID: id }, include: db.Brands });
  if (!shoe) throw "Shoe not found";
  return shoe;
}
