const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const OrderService = require("./orders.service");

// routes
router.post("/create", createOrders);

module.exports = router;

function createOrders(req, res, next) {
  OrderService.OrdersCreate()
    .then(() => res.json({ message: "Orders created successfully" }))
    .catch(next);
}
