var jwt = require("jsonwebtoken");
const { secret } = require("config.json");
const db = require("_helpers/db");

module.exports = authorize;

async function authorize(req, res, next) {
  const accessToken = req.headers["authorization"].split(" ")[1];
  console.log(accessToken);
  const decode = jwt.verify(accessToken, secret);
  if (decode && decode.sub) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
