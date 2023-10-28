const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { secret } = require("config.json");
const db = require("_helpers/db");

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function authenticate({ Username, Password }) {
    const admin = await db.Admin.scope("withHash").findOne({
        where: { Username },
    });

    if (!admin || !(await bcrypt.compare(Password, admin.PasswordHash)))
        throw "Username or Password is incorrect";

    // authentication successful
    const token = jwt.sign({ sub: admin.id }, secret, { expiresIn: "7d" });
    return { ...omitHash(admin.get()), token };
}

async function getAll() {
    return await db.Admin.findAll();
}

async function getById(id) {
    return await getAdmin(id);
}

async function create(params) {
    // validate
    if (await db.Admin.findOne({ where: { Username: params.Username } })) {
        throw 'Username "' + params.Username + '" is already taken';
    }

    // hash password
    if (params.Password) {
        params.PasswordHash = await bcrypt.hash(params.Password, 10);
    }

    // save user
    await db.Admin.create(params);
}

async function update(id, params) {
    const admin = await getAdmin(id);

    // validate
    const usernameChanged =
        params.Username && admin.Username !== params.Username;
    if (
        usernameChanged &&
        (await db.Admin.findOne({ where: { Username: params.Username } }))
    ) {
        throw 'Username "' + params.Username + '" is already taken';
    }

    // hash password if it was entered
    if (params.Password) {
        params.PasswordHash = await bcrypt.hash(params.Password, 10);
    }

    // copy params to user and save
    Object.assign(admin, params);
    await admin.save();

    return omitHash(admin.get());
}

async function _delete(id) {
    const admin = await getAdmin(id);
    await admin.destroy();
}

// helper functions

async function getAdmin(id) {
    const admin = await db.Admin.findByPk(id);
    if (!admin) throw "Admin not found";
    return admin;
}

function omitHash(admin) {
    const { PasswordHash, ...adminWithoutHash } = admin;
    return adminWithoutHash;
}
