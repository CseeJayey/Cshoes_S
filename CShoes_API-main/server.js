﻿require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");

const errorHandler = require("_middleware/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// // api routes
app.use("/users", require("./routes/users/users.controller"));
app.use("/shoes", require("./routes/shoes/shoes.controller"));
app.use("/orders", require("./routes/orders/orders.controller"));
app.use("/brands", require("./routes/brands/brands.controller"));
app.use("/blogs", require("./routes/blog/blog.controller"));
// app.use("/admins", require("./routes/admins/admins.controller "));

// // global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 3001;
app.listen(port, () => console.log("Server listening on port " + port));
