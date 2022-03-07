const { plans, categories } = require("../../models");

module.exports = {
  success: async (req, res) => {
    try {
      if (!req.params.plan_id || !req.body.plan) {
        return res.status(400).json({
          message: "Bad Request",
        });
      } else {
        await categories.create({
          plan_id: req.params.plan_id,
          success: req.body.plan,
        });

        res.status(201).json({
          message: "Successfully Classified",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  effort: async (req, res) => {
    try {
      if (!req.params.plan_id || !req.body.plan) {
        return res.status(400).json({
          message: "Bad Request",
        });
      } else {
        await categories.create({
          plan_id: req.params.plan_id,
          effort: req.body.plan,
        });

        res.status(201).json({
          message: "Successfully Classified",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  fail: async (req, res) => {
    try {
      if (!req.params.plan_id || !req.body.plan) {
        return res.status(400).json({
          message: "Bad Request",
        });
      } else {
        await categories.create({
          plan_id: req.params.plan_id,
          fail: req.body.plan,
        });

        res.status(201).json({
          message: "Successfully Classified",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
};
