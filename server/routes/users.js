const express = require("express");
const usersRouter = express.Router();

const { usersController } = require("../controller");

//  POST /users/signup
usersRouter.post("/signup", usersController.signup.post);

//  POST /users/login
usersRouter.post("/login", usersController.login.post);

//  POST /users/logout
usersRouter.post("/logout", usersController.logout.post);

//  get /users/auth
usersRouter.get("/auth", usersController.auth.get);

module.exports = usersRouter;
