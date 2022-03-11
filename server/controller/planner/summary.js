const { plans, categories } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {

    const { user_id } = req.params

    try {
      const successCount = await categories.count({
        include: [
          {
            model: plans,
            required: true,
            where: {
              user_id
            }
          }
        ],
        col: "success",
        where: {
          success: {
            [Op.ne]: null,
          },
        },
      });

      const effortCount = await categories.count({
        include: [
          {
            model: plans,
            required: true,
            where: {
              user_id
            }
          }
        ],
        col: "effort",
        where: {
          effort: {
            [Op.ne]: null,
          },
        },
      });

      const failCount = await categories.count({
        include: [
          {
            model: plans,
            required: true,
            where: {
              user_id
            }
          }
        ],
        col: "fail",
        where: {
          fail: {
            [Op.ne]: null,
          },
        },
      });

      res.status(200).json({
        message: "ok",
        data: {
          successCount,
          effortCount,
          failCount,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};
