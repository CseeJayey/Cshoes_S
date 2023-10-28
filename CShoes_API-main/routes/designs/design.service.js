const db = require("_helpers/db");

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function getAll() {
    return await db.Design.findAll();
}

async function getById(id) {
    return await getDesign(id);
}

async function create(params) {
    await db.Design.create(params);
}

async function update(id, params) {
    const design = await getDesign(id);

    Object.assign(design, params);
    await design.save();
    
    return design.get()
}

async function _delete(id) {
    const design = await getDesign(id);
    await design.destroy();
}

async function getDesign(id) {
    const design = await db.Design.findByPk(id);
    if (!design) throw "Design not found";
    return design;
}