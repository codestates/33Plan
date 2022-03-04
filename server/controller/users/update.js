require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { users } = require("../../models");
const { validatePW, validatePhone } = require("../validationFunctions");

// 쿠키로 전달된 토큰 확인 -> 검증하여 DB에 해당 데이터와 맞는 사람을 찾고 난후 req.body로 전달된 값들로 수정

module.exports = {
  patch: async (req, res) => {
    // 토큰 확인
    // console.log(req.headers.authorization)
    if (!req.headers.authorization) {
    } else {
      try {
        const { nickname, password, phone } = req.body;
        const accessToken = req.headers.authorization.split(" ")[1];
        const decoded = verify(accessToken, process.env.ACCESS_SECRET);

        if (password) {
          if (!validatePW(password)) {
            return res.status(400).send({
              message: "비밀번호가 형식에 맞지 않습니다",
            });
          }
        }
        if (phone) {
          if (!validatePhone(phone)) {
            return res.status(400).send({
              message: "전화번호가 형식에 맞지 않습니다",
            });
          }
        }

        await users.update(
          {
            nickname: nickname,
            password: password,
            phone: phone,
          },
          {
            where: {
              email: decoded.email,
            },
          }
        );

        const modifiedUserData = await users.findByPk(decoded.id);

        res.status(200).json({
          message: "ok",
          data: {
            userInfo: modifiedUserData,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
};
