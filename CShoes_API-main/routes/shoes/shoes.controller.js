const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const shoeService = require("./shoe.service");
const authorize = require("../../_middleware/authorize");
// routes
router.post("/create", createSchema, create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

const schemaShoes = Joi.object({
  BrandID: Joi.number().integer().required(),
  Name: Joi.string().required(),
  Price: Joi.number().integer().required(),
  Description: Joi.string().required(),
  URL: Joi.string().required(),
});

function createSchema(req, res, next) {
  validateRequest(req, next, schemaShoes);
}

function create(req, res, next) {
  shoeService
    .create(req.body)
    .then(() => res.json({ message: "Shoe created successfully" }))
    .catch(next);
}

function getAll(req, res, next) {
  shoeService
    .getAll()
    .then(objs => res.json(objs))
    .catch(next);
}

function getById(req, res, next) {
  shoeService
    .getById(req.params.id)
    .then(obj => res.json(obj))
    .catch(next);
}

function updateSchema(req, res, next) {
  validateRequest(req, next, schemaShoes);
}

function update(req, res, next) {
  shoeService
    .update(req.params.id, req.body)
    .then(obj => res.json(obj))
    .catch(next);
}

function _delete(req, res, next) {
  shoeService
    .delete(req.params.id)
    .then(() => res.json({ message: "Shoe deleted successfully" }))
    .catch(next);
}
