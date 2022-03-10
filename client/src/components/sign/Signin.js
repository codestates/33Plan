import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function Signin({ handleResponseSuccess }) {
  /* 로그인 페이지 만들기*/
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  // 에러메세지
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validateFuntion = {
    Email: (email) => {
      const regExp =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

      return regExp.test(email);
    },
    PW: (password) => {
      // 비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다
      const pattern1 = /[0-9]/; // 숫자
      const pattern2 = /[a-zA-Z]/; // 문자
      const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

      if (
        !pattern1.test(password) ||
        !pattern2.test(password) ||
        !pattern3.test(password) ||
        password.length < 8
      ) {
        return false;
      } else {
        return true;
      }
    },
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
      // 이메일 유효성 검사
    } else if (!validateFuntion.Email(email)) {
      setErrorEmail("이메일 형식과 맞지 않습니다.");
      // 비밀번호 유효성 검사
    } else if (!validateFuntion.PW(password)) {
      setErrorPassword(
        "비밀번호를 문자,숫자,특수문자를 포함한 8자리 이상이여야 합니다."
      );
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/login`,
          {
            email: loginInfo.email,
            password: loginInfo.password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          handleResponseSuccess();
        })
        .catch((err) => {
          setErrorMessage("이메일 혹은 비밀번호가 일치하지 않습니다.");
        });
    }
  };

  return (
    <div className="mainpage">
      <center className="mypage-container">
        <h1>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="sign-form">
            <span>이메일</span>
            <input type="text" onChange={handleInputValue("email")} />
            <div className="sign-form">{errorEmail}</div>
          </div>
          <div className="sign-form">
            <span>비밀번호</span>
            <input type="password" onChange={handleInputValue("password")} />
            <div className="sign-form">{errorPassword}</div>
          </div>
          <Link to="/signup">
            <div className="sign-form">
              <div>회원가입</div>
            </div>
          </Link>
          <button className="sign-form" type="submit" onClick={handleLogin}>
            로그인
          </button>
          <br />
          <Link to="/">
            <button className="sign-form">닫기</button>
          </Link>
          <div className="sign-form">{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}

export default Signin;
