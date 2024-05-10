const express = require("express");
const routes = express.Router();

const UserController = require("./app/controller/userController");

routes.get("/user", UserController.readAll);
routes.delete("/user/:email", UserController.deleteUser);
routes.post("/user", UserController.create);

module.exports = routes;