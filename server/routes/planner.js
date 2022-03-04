const express = require("express");
const plannerRouter = express.Router();

const { plannerController } = require("../controller");

//  POST /users/signup
plannerRouter.post("/register", plannerController.register.post);

//  POST /users/login
plannerRouter.post("/revision", plannerController.revision.post);

//  get /users/auth
plannerRouter.get("/summary", plannerController.summary.get);

module.exports = plannerRouter;
