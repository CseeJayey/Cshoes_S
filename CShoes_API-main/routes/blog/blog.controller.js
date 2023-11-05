const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const blogService = require("./blog.service");
const authorize = require("../../_middleware/authorize");

// routes
router.post("/create", authorize, create);
router.get("/", get);
router.delete("/", remove);
module.exports = router;

// const schemaBlog = Joi.object({
//   title: Joi.number().integer().optional(),
//   img: Joi.string().required(),
//   content: Joi.number().integer().required(),
// });

function create(req, res, next) {
  const authorId = req.body.UserID;
  blogService
    .create(authorId, req.body)
    .then(data => res.json(data))
    .catch(next);
}

function get(req, res, next) {
  blogService
    .get()
    .then(data => res.json(data))
    .catch(next);
}

function remove(req, res, next) {
  blogService
    .remove(req.body.id)
    .then(data => res.json(data))
    .catch(next);
}
