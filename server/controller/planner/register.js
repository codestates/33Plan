const { plans } = require("../../models");
//userID 고려!!

module.exports = {
  post: async (req, res) => {
    const { plan } = req.body;

    if (!plan) {
      res.status(400).send("plan이 입력되지 않았습니다");
    } else {
      try {
        const userId = req.params.id;

        const planData = await plans.create({
          user_id: userId,
          plan
        });

        res.status(201).json({
          message: "Successfully Saved",
          data: planData.dataValues 
        })
      } catch (err) {
        console.log(err);
      }
    }
  },
};
