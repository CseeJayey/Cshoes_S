const db = require("../../_helpers/db");

const OrdersCreate = async (UserID, body) => {
  // const dataTest = [
  //   {
  //     ShoesID: 3,
  //     quantity: 5,
  //   },
  //   {
  //     ShoesID: 5,
  //     quantity: 20,
  //   },
  // ];
  const dataTest = body.shoe;
  const res = [];
  let total_price = 0;
  for (let i = 0; i < dataTest.length; i++) {
    const { shoeId, quantityShoes } = dataTest[i];
    const shoes = await db.Shoe.findByPk(shoeId);
    const amount = shoes.Price * quantityShoes;
    total_price += amount;
    res.push({
      shoeId,
      quantityShoes,
      amount,
    });
  }
  // Orders
  const orders = await db.Orders.create({
    UserID,
    ...body,
    shipping_date: new Date(),
    shipping_status: 0,
    total_price,
    created_at: new Date(),
  });
  // Order_Details
  for (let i = 0; i < res.length; i++) {
    await db.OrderDetails.create({
      OrderID: orders.OrderID,
      ShoeID: res[i].shoeId,
      quantity: res[i].quantityShoes,
      amount: res[i].amount,
    });
  }
  return true;
};

const adminUpdateStatus = async body => {
  const { OrderID, status } = body;
  const res = await db.Orders.findByPk(OrderID);
  res.payment_status = status;
  await res.save();
  return "Update Orders successfully !!";
};

const adminGetAll = async () => {
  const res = await db.Orders.findAll();
  return res;
};

const getOrders = async UserID => {
  const res = await db.Orders.findAll({
    where: {
      UserID,
    },
  });
  return res;
};

const getOrdersDetail = async UserID => {
  const res = await db.Orders.findAll({
    where: {
      UserID,
    },
    include: db.OrderDetails,
  });
  return res;
};

module.exports = {
  OrdersCreate,
  getOrders,
  getOrdersDetail,
  adminUpdateStatus,
  adminGetAll,
};
