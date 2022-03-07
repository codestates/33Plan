require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = {
  get: async (req, res) => {
    // 요청에 따라 사용자 정보 반환
    // Bearer Authentication
    if (!req.headers.authorization) {
      res.status(400).json({
        data: null,
        message: "not Authorized",
      });
    } else {
      try {
        const accessToken = req.headers.authorization.split(" ")[1];
        const decoded = verify(accessToken, process.env.ACCESS_SECRET);
        const userData = await users.findOne({
          where: {
            email: decoded.email,
          },
        });

        if (!userData) {
          res.status(404).json({
            data: null,
            message: "No matching user information",
          });
        } else {
          const { id, nickname, email, createdAt, updatedAt } = userData;
          const userInfo = {
            id,
            nickname,
            email,
            createdAt,
            updatedAt,
          };

          res.status(200).json({
            message: "ok",
            data: {
              userInfo: userInfo,
            },
          });
        }
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
