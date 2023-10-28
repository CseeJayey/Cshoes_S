const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        ShoeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        BrandID: { type: DataTypes.INTEGER, allowNull: false },
        ServiceID: { type: DataTypes.INTEGER, allowNull: false },
        DesignID: { type: DataTypes.INTEGER, allowNull: false },

        Name: { type: DataTypes.STRING, allowNull: false },
        Model: { type: DataTypes.STRING, allowNull: false },
        Price: { type: DataTypes.INTEGER, allowNull: false },
        Colour: { type: DataTypes.STRING(30), allowNull: false },
        Material: { type: DataTypes.STRING, allowNull: false },
        Size: { type: DataTypes.SMALLINT, allowNull: false },
        Description: { type: DataTypes.STRING },
    };

    const options = {
        defaultScope: {},
        scopes: {},
    };

    return sequelize.define("Shoes", attributes, options);
}
