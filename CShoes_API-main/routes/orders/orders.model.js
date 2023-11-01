const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
    },
    shipping_address: {
      type: DataTypes.STRING,
    },
    shipping_date: {
      type: DataTypes.DATE,
    },
    shipping_status: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  };
  return sequelize.define("Orders", attributes);
}
