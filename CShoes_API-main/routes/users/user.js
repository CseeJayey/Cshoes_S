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
    },
    Username: { type: DataTypes.STRING, allowNull: false },
    PasswordHash: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
  };

  return sequelize.define("Users", attributes);
}
