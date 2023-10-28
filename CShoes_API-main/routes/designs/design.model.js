const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        DesignID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Title: { type: DataTypes.STRING, allowNull: false },
        Description: { type: DataTypes.STRING, allowNull: false },
        Media: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {},
        scopes: {},
    };

    return sequelize.define("Designs", attributes, options);
}
