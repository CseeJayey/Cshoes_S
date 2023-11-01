const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    ShoeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    BrandID: { type: DataTypes.INTEGER },
    // ServiceID: { type: DataTypes.INTEGER, allowNull: false },
    // DesignID: { type: DataTypes.INTEGER, allowNull: false },

    Name: { type: DataTypes.STRING },
    Model: { type: DataTypes.STRING },
    Price: { type: DataTypes.INTEGER },
    Colour: { type: DataTypes.STRING(30) },
    Material: { type: DataTypes.STRING },
    Size: { type: DataTypes.SMALLINT },
    Description: { type: DataTypes.STRING },
    URL: { type: DataTypes.STRING },
  };

  const options = {
    defaultScope: {},
    scopes: {},
  };

  const shoes = sequelize.define("Shoes", attributes, options);
  return shoes;
}
