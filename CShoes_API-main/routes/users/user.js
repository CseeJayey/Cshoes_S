const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      // NDA_LHD_LNH
    },
    Username: { type: DataTypes.STRING, allowNull: false, unique: "unique_username" },
    PasswordHash: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
    FirstName: { type: DataTypes.STRING },
    LastName: { type: DataTypes.STRING },
    Gender: { type: DataTypes.CHAR(1) },
    PhoneNumber: { type: DataTypes.STRING },
    ShippingAddress: { type: DataTypes.STRING },
    BillingAddress: { type: DataTypes.STRING },
  };

  return sequelize.define("Users", attributes);
}
