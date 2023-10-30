const tedious = require("tedious");
const { Sequelize } = require("sequelize");

const { dbName, dbConfig } = require("config.json");

module.exports = db = {};

initialize();

async function initialize() {
  const dialect = "mssql";
  const host = dbConfig.server;
  const { userName, password } = dbConfig.authentication.options;

  // create db if it doesn't already exist
  await ensureDbExists(dbName);

  // connect to db
  const sequelize = new Sequelize(dbName, userName, password, {
    host,
    dialect,
    define: {
      timestamps: false,
    },
  });

  // init models and add them to the exported db object
  db.User = require("../routes/users/user.model")(sequelize);
  db.Shoe = require("../routes/shoes/shoe.model")(sequelize);
  db.Design = require("../routes/designs/design.model")(sequelize);
  db.Users = require("../routes/users/user")(sequelize);
  db.Roles = require("../routes/roles/roles")(sequelize);

  // Users 1 - 1 Roles
  db.Users.belongsTo(db.Roles, {
    foreignKey: "RoleID",
  });

  // sync all models with database
  // await sequelize.sync({ alter: true });
}

async function ensureDbExists(dbName) {
  return new Promise((resolve, reject) => {
    const connection = new tedious.Connection(dbConfig);
    connection.connect(err => {
      if (err) {
        console.error(err);
        reject(`Connection Failed: ${err.message}`);
      }
      const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
      const request = new tedious.Request(createDbQuery, err => {
        if (err) {
          console.error(err);
          reject(`Create DB Query Failed: ${err.message}`);
        }

        // query executed successfully
        resolve();
      });

      connection.execSql(request);
    });
  });
}
