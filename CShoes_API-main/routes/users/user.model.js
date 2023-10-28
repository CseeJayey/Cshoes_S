const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        CustomerID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FirstName: { type: DataTypes.STRING, allowNull: false },
        LastName: { type: DataTypes.STRING, allowNull: false },
        Username: { type: DataTypes.STRING, allowNull: false },
        PasswordHash: { type: DataTypes.STRING, allowNull: false },
        Email: { type: DataTypes.STRING, allowNull: false },
        Gender: { type: DataTypes.CHAR(1), allowNull: false },
        PhoneNumber: { type: DataTypes.STRING, allowNull: false },
        ShippingAddress: { type: DataTypes.STRING },
        BillingAddress: { type: DataTypes.STRING },
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

    return sequelize.define("Customers", attributes, options);
}
