const express = require("express");
const plannerRouter = express.Router();

const { plannerController } = require("../controller");

plannerRouter.post("/register/:id", plannerController.register.post);

plannerRouter.get("/summary/:user_id", plannerController.summary.get);

// today -> good / trying / bad 분류
plannerRouter.post("/classification/success/:plan_id", plannerController.classification.success)
plannerRouter.post("/classification/effort/:plan_id", plannerController.classification.effort)
plannerRouter.post("/classification/fail/:plan_id", plannerController.classification.fail)


module.exports = plannerRouter;
