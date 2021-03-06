require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { users } = require("../../models");
const { validatePW, validatePhone } = require("../validationFunctions");

// 쿠키로 전달된 토큰 확인 -> 검증하여 DB에 해당 데이터와 맞는 사람을 찾고 난후 req.body로 전달된 값들로 수정

module.exports = {
  patch: async (req, res) => {
    // 토큰 확인
    // console.log(req.headers.authorization)
    if (!req.cookies.accessToken) {
      res.status(400).json({
        data: null,
        message: "not Authorized",
      });
    } else {
      try {
        const { nickname, password, phone } = req.body;
        const accessToken = req.cookies.accessToken;
        const decoded = verify(accessToken, process.env.ACCESS_SECRET);
        if (password) {
          if (!validatePW(password)) {
            return res.status(400).json({
              data: null,
              message: "Invalid password. please check it again",
            });
          }
        }
        if (phone) {
          if (!validatePhone(phone)) {
            return res.status(400).json({
              data: null,
              message: "Invalid phone number. please check it again",
            });
          }
        }

        const checkNickname = await users.findByPk(decoded.id);

        if (checkNickname.nickname === nickname) {
          return res.status(409).json({
            data: null,
            message: "nickname already exists",
          });
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
        res.status(401).json({
          data: null,
          message: "Invalid token",
        });
      }
    }
  },
};
