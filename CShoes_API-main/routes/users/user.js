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
      // NDA_LHD_LNH
    },
    Username: { type: DataTypes.STRING, allowNull: false, unique: "unique_username" },
    PasswordHash: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
  };

  return sequelize.define("Users", attributes);
}
