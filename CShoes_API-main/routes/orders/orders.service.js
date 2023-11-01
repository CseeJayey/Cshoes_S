const db = require("../../_helpers/db");

const OrdersCreate = async () => {
  const dataTest = [
    {
      ShoesID: 3,
      quantity: 5,
    },
    {
      ShoesID: 5,
      quantity: 20,
    },
  ];
  for (let i = 0; i < dataTest.length; i++) {
    const { ShoesID, quantity } = dataTest[i];
    const shoes = await db.Shoe.findByPk(ShoesID);
    const price = shoes.price;
    console.log(price);
  }
  return true;
};

module.exports = {
  OrdersCreate,
};
