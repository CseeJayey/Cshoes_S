const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    authorId: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING(2048) },
    img: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING(2048) },
    publishedAt: { type: DataTypes.DATE },
  };
  return sequelize.define("Blogs", attributes);
}
