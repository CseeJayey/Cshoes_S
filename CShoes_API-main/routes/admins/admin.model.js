const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        AdminID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Username: { type: DataTypes.STRING, allowNull: false },
        PasswordHash: { type: DataTypes.STRING, allowNull: false },
        Email: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ["PasswordHash"] },
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {} },
        },
    };

    return sequelize.define("Admins", attributes, options);
}
