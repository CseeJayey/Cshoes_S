const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    Order_details_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderID: {
      type: DataTypes.INTEGER,
    },
    ShoeID: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.DATE,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  };
  return sequelize.define("Order_details", attributes);
}
