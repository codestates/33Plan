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
  // 에러메세지 관리
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
      setErrorMessage("이메일과 비밀번호를 입력하세요")
      let minutTimer =  setTimeout(()=>  setErrorMessage(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 이메일 유효성 검사
    } else if (!validateFuntion.Email(email)) {
      setErrorEmail("이메일 형식에 맞지 않습니다.");
      let minutTimer =  setTimeout(()=>  setErrorEmail(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 비밀번호 유효성 검사
    } else if (!validateFuntion.PW(password)) {
      setErrorPassword(
        "비밀번호를 문자,숫자,특수문자를 포함한 8자리 이상이여야 합니다."
      );
      let minutTimer =  setTimeout(()=>  setErrorPassword(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
    } else {
      axios
        .post(
          "https://localhost:4000/users/login",
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
        <form className="mypage-form" onSubmit={(e) => e.preventDefault()}>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">이메일</dt>
            <input
              type="text"
              className="mypage-content"
              onChange={handleInputValue("email")}
            />
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호</dt>
            <input
              type="password"
              className="mypage-content"
              onChange={handleInputValue("password")}
            />
          </dl>
          <Link to="/signup">
            <div className="sign-form">
              <div>회원가입</div>
            </div>
          </Link>
          <button className="sign-btn magin" type="submit" onClick={handleLogin}>
            로그인
          </button>
          <div className="margin">
            <Link to="/">
              <button className="sign-btn">닫기</button>
            </Link>
          </div>
          <div className="error-content">
            <h3>{errorMessage}</h3>
            <h3>{errorEmail}</h3>
            <h3>{errorPassword}</h3>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Signin;
