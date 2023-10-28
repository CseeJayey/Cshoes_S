const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const designService = require("./design.service");

// routes
router.post("/create", createSchema, create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

function createSchema(req, res, next) {
    const schema = Joi.object({
        DesignID: Joi.number().integer().required(),
        Title: Joi.string().required(),
        Description: Joi.string().required(),
        Media: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {
    designService
        .create(req.body)
        .then(() => res.json({ message: "Design created successfully" }))
        .catch(next);
}

function getAll(req, res, next) {
    designService
        .getAll()
        .then((objs) => res.json(objs))
        .catch(next);
}

function getById(req, res, next) {
    designService
        .getById(req.params.id)
        .then((obj) => res.json(obj))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        DesignID: Joi.number().integer().required(),
        Title: Joi.string().required(),
        Description: Joi.string().required(),
        Media: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    designService
        .update(req.params.id, req.body)
        .then((obj) => res.json(obj))
        .catch(next);
}

function _delete(req, res, next) {
    designService
        .delete(req.params.id)
        .then(() => res.json({ message: "Design deleted successfully" }))
        .catch(next);
}
