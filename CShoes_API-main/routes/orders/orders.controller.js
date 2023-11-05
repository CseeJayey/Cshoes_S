const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const OrderService = require("./orders.service");
const authorize = require("../../_middleware/authorize");

// routes
router.post("/create", authorize, createOrders);
router.get("/", authorize, getOrders);
router.get("/user", authorize, getByUser);
router.get("/detail/:id", getOrdersDetail);

// routes admin
router.post("/admin/update-status", adminUpdateStatus);
router.get("/admin/get-all", adminGetAll);
module.exports = router;

function createOrders(req, res, next) {
  const UserID = req.body.UserID;
  OrderService.OrdersCreate(UserID, req.body)
    .then(() => res.json({ message: "Orders created successfully" }))
    .catch(next);
}

function getOrders(req, res, next) {
  const UserID = req.body.UserID;
  OrderService.getOrders(UserID)
    .then(data => res.json(data))
    .catch(next);
}

function getOrdersDetail(req, res, next) {
  const id = req.params.id;
  OrderService.getOrdersDetail(id)
    .then(data => res.json(data))
    .catch(next);
}

function adminUpdateStatus(req, res, next) {
  const data = {
    OrdersID: 1,
    status: 1,
  };
  OrderService.adminUpdateStatus(req.body)
    .then(data => res.json(data))
    .catch(next);
}

function adminGetAll(req, res, next) {
  OrderService.adminGetAll()
    .then(data => res.json(data))
    .catch(next);
}

function getByUser(req, res, next) {
  const UserID = req.body.UserID;
  OrderService.getByUser(UserID)
    .then(data => res.json(data))
    .catch(next);
}
