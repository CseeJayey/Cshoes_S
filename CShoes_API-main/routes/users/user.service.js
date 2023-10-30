const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { secret } = require("config.json");
const db = require("_helpers/db");
const { string } = require("joi");

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function authenticate({ Username, Password }) {
  const user = await db.Users.findOne({
    where: { Username },
    include: db.Roles,
  });
  if (!user || !(Password === user.PasswordHash)) {
    throw "Username or Password is incorrect";
  }
  // authentication successful
  const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "7d" });
  return { ...omitHash(user.get()), token };
}

async function getAll() {
  return await db.User.findAll();
}

async function getById(id) {
  return await getUser(id);
}

async function create(params) {
  // validate
  if (await db.User.findOne({ where: { Username: params.Username } })) {
    throw 'Username "' + params.Username + '" is already taken';
  }

  // hash password
  if (params.Password) {
    // params.PasswordHash = await bcrypt.hash(params.Password, 10);
    params.PasswordHash = params.Password;
  }

  // save user
  await db.User.create(params);
}

async function update(id, params) {
  const user = await getUser(id);

  // validate
  const usernameChanged = params.Username && user.Username !== params.Username;
  if (usernameChanged && (await db.User.findOne({ where: { Username: params.Username } }))) {
    throw 'Username "' + params.Username + '" is already taken';
  }

  // hash password if it was entered
  if (params.Password) {
    // params.PasswordHash = await bcrypt.hash(params.Password, 10);
    params.PasswordHash = params.Password;
  }

  // copy params to user and save
  Object.assign(user, params);
  await user.save();

  return omitHash(user.get());
}

async function _delete(id) {
  const user = await getUser(id);
  await user.destroy();
}

// helper functions

async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw "User not found";
  return user;
}

function omitHash(user) {
  const { PasswordHash, Role, ...userWithoutHash } = user;
  userWithoutHash.isAdmin = Role.isAdmin;
  return userWithoutHash;
}
