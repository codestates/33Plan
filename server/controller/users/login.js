require("dotenv").config();
const { users } = require("../../models");
const { sign } = require("jsonwebtoken");

// 로그인 요청시
// DB에 요청받은 유저정보 유무 판별
// 유저 정보 있으면 토큰 생성 후 전달

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).send("insufficient parameters supplied");
    } else {
      try {
        const userData = await users.findOne({
          where: {
            email,
            password,
          },
        });

        if (!userData) {
          res.status(400).send("Invalid user");
        } else {
          const { id, nickname, email, createdAt, updatedAt } =
            userData.dataValues;
          const userInfo = {
            id,
            nickname,
            email,
            createdAt,
            updatedAt,
          };

          const accessToken = sign(userInfo, process.env.ACCESS_SECRET, {
            expiresIn: 60 * 60,
          });
          const refreshToken = sign(userInfo, process.env.REFRESH_SECRET, {
            expiresIn: 60 * 60 * 24,
          });

          res
            .status(200)
            .cookie("accessToken", accessToken, {
              httpOnly: true,
              secure: true,
              sameSite: "none",
            })
            .cookie("refreshToken", refreshToken, {
              httpOnly: true,
              secure: true,
              sameSite: "none",
            })
            .send("Successfully Logged In");
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
};
