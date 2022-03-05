const express = require("express");
const plannerRouter = express.Router();

const { plannerController } = require("../controller");

plannerRouter.post("/register/:id", plannerController.register.post);

plannerRouter.post("/revision/:id", plannerController.revision.post);

plannerRouter.get("/summary/:id", plannerController.summary.get);

// today -> good / trying / bad 분류
plannerRouter.post("/classification/good", plannerController.classification.good)
plannerRouter.post("/classification/trying", plannerController.classification.trying)
plannerRouter.post("/classification/bad", plannerController.classification.bad)


module.exports = plannerRouter;
