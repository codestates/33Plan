const express = require("express");
const usersRouter = express.Router();

const { usersController } = require("../controller");

usersRouter.post("/signup", usersController.signup.post);
usersRouter.post("/login", usersController.login.post);
usersRouter.post("/logout", usersController.logout.post);
usersRouter.get("/auth", usersController.auth.get);
usersRouter.patch("/update", usersController.update.patch);

module.exports = usersRouter;
