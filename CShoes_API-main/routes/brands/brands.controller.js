const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const brandsService = require("./brands.service");
const authorize = require("../../_middleware/authorize");
// routes
router.get("/", getAll);

module.exports = router;

function getAll(req, res, next) {
  brandsService
    .getAll()
    .then(objs => res.json(objs))
    .catch(next);
}
