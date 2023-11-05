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
    title: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    publishedAt: { type: DataTypes.DATE },
  };
  return sequelize.define("Blogs", attributes);
}
