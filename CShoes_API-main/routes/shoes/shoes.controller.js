const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const shoeService = require("./shoe.service");

// routes
router.post("/create", createSchema, create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

function createSchema(req, res, next) {
  const schema = Joi.object({
    BrandID: Joi.number().integer().required(),
    ServiceID: Joi.number().integer().required(),
    DesignID: Joi.number().integer().required(),
    Name: Joi.string().required(),
    Model: Joi.string().required(),
    Price: Joi.number().integer().required(),
    Colour: Joi.string().required(),
    Material: Joi.string().required(),
    Size: Joi.number().integer().required(),
    Description: Joi.string().required(),
  });
  validateRequest(req, next, schema);
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
  const schema = Joi.object({
    BrandID: Joi.number().integer().required(),
    ServiceID: Joi.number().integer().required(),
    DesignID: Joi.number().integer().required(),
    Name: Joi.string().required(),
    Model: Joi.string().required(),
    Price: Joi.number().integer().required(),
    Colour: Joi.string().required(),
    Material: Joi.string().required(),
    Size: Joi.number().integer().required(),
    Description: Joi.string().required(),
  });
  validateRequest(req, next, schema);
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
