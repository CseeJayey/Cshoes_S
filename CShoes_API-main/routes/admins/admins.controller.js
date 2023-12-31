﻿const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const userService = require("./admin.service");

// routes
router.post("/authenticate", authenticateSchema, authenticate);
router.post("/register", registerSchema, register);
router.get("/", /*authorize(),*/ getAll);
router.get("/current", /*authorize(),*/ getCurrent);
router.get("/:id", /*authorize(),*/ getById);
router.put("/:id", /*authorize(),*/ updateSchema, update);
router.delete("/:id", /*authorize(),*/ _delete);

module.exports = router;

function authenticateSchema(req, res, next) {
  const schema = Joi.object({
    Username: Joi.string().required(),
    Password: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(obj => res.json(obj))
    .catch(next);
}

function registerSchema(req, res, next) {
  const schema = Joi.object({
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    Username: Joi.string().required(),
    Password: Joi.string().min(6).required(),
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(() => res.json({ message: "Registration successful" }))
    .catch(next);
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then(objs => res.json(objs))
    .catch(next);
}

function getCurrent(req, res, next) {
  res.json(req.user);
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then(obj => res.json(obj))
    .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    FirstName: Joi.string().empty(""),
    LastName: Joi.string().empty(""),
    Username: Joi.string().empty(""),
    Password: Joi.string().min(6).empty(""),
  });
  validateRequest(req, next, schema);
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then(obj => res.json(obj))
    .catch(next);
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(() => res.json({ message: "Admin deleted successfully" }))
    .catch(next);
}
