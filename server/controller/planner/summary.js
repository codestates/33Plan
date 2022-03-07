const { plans, categories } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    try {
      const successCount = await categories.count({
        col: "success",
        where: {
          plan_id: req.params.plan_id,
          success: {
            [Op.ne]: null,
          },
        },
      });

      const effortCount = await categories.count({
        col: "effort",
        where: {
          plan_id: req.params.plan_id,
          effort: {
            [Op.ne]: null,
          },
        },
      });

      const failCount = await categories.count({
        col: "fail",
        where: {
          plan_id: req.params.plan_id,
          fail: {
            [Op.ne]: null,
          },
        },
      });

      //* 특정 시간 범위 내 데이터를 가져올 때,
      // 1. plans 테이블의 updatedAt을 가져온다
      const getDate = await plans.findOne({
        where: {
          id: req.params.plan_id, //? 어느 날짜를 기준으로 date를 구할지 고민해볼 것
        },
      });
      // console.log(getDate.updatedAt);
      // 2. startDate와 endDate를 생성
      // 여기에 작성된 플랜의 updatedAt을 가져온다 => 수정되었을 경우 포함
      const startDate = new Date(getDate.updatedAt).toLocaleString('ko-KR', { timeZone: "UTC" });
      // 예를 들어, 플랜을 기준으로 3일치를 가져오려면, startDate + 2d가 되게끔 값을 추가해준다 // 172800000
      const endDate = new Date(startDate + 172800000);

      console.log("startDate : ", startDate);
      // console.log("endDate : ", endDate);
      // 3. 예를들어, user_id가 1인 사람의 3일치 데이터를 가져온다 (user_id는 req.params로 받음)
      // categories와 plans를 join해서 user_id가 1인 사람의 between Date 사이의 success 갯수를 가져온다
      // console.log(req.params.user_id);
      //Todo 내일 날짜 바뀌면 날짜를 기준으로 조회해볼 것!
      // const successCountBtw3ds = await plans.findAll({
      //   where: {
      //     // plans option
      //     updatedAt: {
      //       [Op.between]: [startDate, endDate],
      //     },
      //     user_id: req.params.user_id,
      //   },
      //   include: [
      //     // categories option
      //     {
      //       model: categories,
      //       required: true,
      //       where: {
      //         success: {
      //           [Op.ne]: null,
      //         },
      //       },
      //     },
      //   ],
      // });
      const successCountBtw3ds = await plans.findAll({
        where: {
          updatedAt: {
            // [Op.between]: [startDate, endDate],
          },
        },
      });

      // console.log(successCountBtw3ds);

      res.status(200).json({
        message: "ok",
        data: {
          successCount,
          effortCount,
          failCount,
          successCountBtw3ds,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};
