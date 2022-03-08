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
      res.status(400).send({
        message: "Invalid email or password",
      });
    } else {
      try {
        const userData = await users.findOne({
          where: {
            email,
            password,
          },
        });

        if (!userData) {
          res.status(404).send({
            message: "No matching user information",
          });
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

          res
            .status(200)
            .cookie("accessToken", accessToken, {
              maxAge: 60 * 60, 
              httpOnly: true,
              secure: true,
              sameSite: "none",
            })
            .send({ message: "Successfully Logged In" });
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
};
