const db = require("_helpers/db");

module.exports = {
  create,
  get,
  remove,
  getById,
};

async function create(authorId, body) {
  const item = { ...body };
  item.authorId = authorId;
  item.publishedAt = new Date();
  const data = await db.Blogs.create(item);
  return data;
}

async function get() {
  const data = await db.Blogs.findAll();
  return data;
}

async function remove(id) {
  const data = await db.Blogs.destroy({
    where: {
      id,
    },
  });
  return data;
}

async function getById(id) {
  const res = await getBlog(id);
  return res.get();
}

async function getBlog(id) {
  const shoe = await db.Blogs.findOne({ where: { id } });
  if (!shoe) throw "Blogs not found";
  return shoe;
}
