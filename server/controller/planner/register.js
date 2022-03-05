const { plans } = require("../../models");
//userID 고려!!

module.exports = {
  post: async (req, res) => {
    const { plan1, plan2, plan3 } = req.body;

    if (!plan1 || !plan2 || !plan3) {
      res.status(400).send("plan이 입력되지 않았습니다");
    } else {
      try {
        const userId = req.params.id;

        const planData = await plans.create({
          user_id: userId,
          plan1,
          plan2,
          plan3,
        });

        console.log(planData);

      } catch (err) {
        console.log(err);
      }
    }
  },
};
