require("dotenv").config();
const { validateEmail, validatePW } = require("../validationFunctions");
const { users } = require("../../models");
const { sign } = require("jsonwebtoken");

// signup에 필요한 정보
// {
//     "nickname": "testuser",
//     "email": "testuser@test.com",
//     "password": "1234abc!"
// }
// 유효성 검사
// 비밀번호 : 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다

module.exports = {
  post: async (req, res) => {
    const { nickname, email, password } = req.body;

    if (!nickname || !email || !password) {
      res.status(422).send("insufficient parameters supplied");
    } else if (!validateEmail(email)) {
      res.status(400).send("이메일 형식에 맞지 않습니다");
    } else if (!validatePW(password)) {
      res.status(400).send("비밀번호 형식에 맞지 않습니다");
    } else {
      // 유효성 검사 통과한 경우
      // 1. 데이터베이스에 중복되는 내용 있는지 확인 후 없으면 데이터 삽입
      // 2. 결과 데이터로 토큰 생성 후 클라이언트에 전달
      try {
        const [userData, created] = await users.findOrCreate({
          where: {
            nickname,
            email,
            password,
          },
        });

        if (!created) {
          res.status(409).send("email already exists");
        } else {
          const { id, nickname, email, updatedAt, createdAt } =
            userData.dataValues;
          const userInfo = {
            id,
            nickname,
            email,
            updatedAt,
            createdAt,
          };

          const accessToken = sign(userInfo, process.env.ACCESS_SECRET, {
            expiresIn: 60 * 60,
          });
          const refreshToken = sign(userInfo, process.env.REFRESH_SECRET, {
            expiresIn: 60 * 60 * 24,
          });

          res
            .status(201)
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
            .send("Successfully Signed Up");
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
};
