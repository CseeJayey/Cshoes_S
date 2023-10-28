const db = require("_helpers/db");

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function getAll() {
    return await db.Shoe.findAll();
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

    return shoe.get()
}

async function _delete(id) {
    const shoe = await getShoe(id);
    await shoe.destroy();
}

async function getShoe(id) {
    const shoe = await db.Shoe.findByPk(id);
    if (!shoe) throw "Shoe not found";
    return shoe;
}