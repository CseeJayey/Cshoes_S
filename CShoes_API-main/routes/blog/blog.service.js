const db = require("_helpers/db");

module.exports = {
  create,
  get,
  remove,
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
