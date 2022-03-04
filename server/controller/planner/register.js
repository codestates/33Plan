const { users, todays } = require("../../models");
//userID 고려!!

module.exports = {
  post: async (req, res) => {
    const { plan } = req.body;

    if (!plan) {
      res.status(400).send("plan이 입력되지 않았습니다");
    } else {
      try {
        const userId = req.params.id;

        // const userData = await users.findByPk(userId);
        // console.log(userData);
        // console.log(req.params.id);
        const planData = await todays.create({
          plan,
          user_id: userId,
        });

        console.log(planData);

        // if (!planData) {
        //   res.status(404).send("일치하는 플랜을 찾을 수 없습니다");
        // } else {
        //   console.log(planData);
        // }
      } catch (err) {
        console.log(err);
      }
    }
  },
};
