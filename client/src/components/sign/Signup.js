import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

function Signup() {
  /* 회원가입 페이지 */

  // 에러메세지
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //유저 정보 입력 값
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rePassword: "",
    nickname: "",
    phone: "",
  });

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
    Phone: (phone_number) => {
      const regPhone = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;

      return regPhone.test(phone_number);
    },
    DoubleCheck: (password, rePassword) => {
      if (String(password) !== String(rePassword)) {
        return false;
      } else {
        return true;
      }
    },
  };

  // 유저 회원가입 입력값
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    // isValid();
  };

  // 에러메세지 핸들러 함수
  // const handle = () => {
  //   ErrorEmail
  // }

  const handleSignup = async () => {
    const { email, password, nickname, phone, rePassword } = userInfo;
    // 모든항목 입력 확인

    if (!email || !password || !nickname || !phone || !rePassword) {
      setErrorMessage("모든 항목은 필수입니다");
      let minutTimer = setTimeout(() => setErrorMessage(""), 2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 이메일 유효성 검사
    } else if (!validateFuntion.Email(email)) {
      setErrorEmail("이메일 형식과 맞지 않습니다.");
      let minutTimer = setTimeout(() => setErrorEmail(""), 2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 비밀번호 유효성 검사
    } else if (!validateFuntion.PW(password)) {
      setErrorPassword(
        "비밀번호는 문자,숫자,특수문자를 포함한 8자리 이상이여야 합니다."
      );
      let minutTimer = setTimeout(() => setErrorPassword(""), 2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 휴대폰 유효성 검사
    } else if (!validateFuntion.Phone(phone)) {
      setErrorPhone("유효하지 않는 핸드폰번호 입니다.");
      let minutTimer = setTimeout(() => setErrorPhone(""), 2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 비밀번호 더블체크
    } else if (!validateFuntion.DoubleCheck(password, rePassword)) {
      setErrorRePassword("비밀번호가 일치 하지 않습니다.");
      let minutTimer = setTimeout(() => setErrorRePassword(""), 2000);
      return () => {
        clearTimeout(minutTimer);
      };
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signup`, userInfo, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          // 회원가입 완료 되면 로그인페이지로 이동하기
          if (res.data.message === "Successfully Signed Up") {
            history.push("/login");
          }
        })
        .catch((err) => {
          setErrorMessage("이미 사용중인 이메일주소 혹은 닉네임이 존재합니다.");
        });
    }
  };

  // 회원가입 뒤로가기 기능
  const history = useHistory();

  const handleGoback = () => {
    return history.push("/");
  };
  return (
    <div className="mainpage signup">
      <center className="mypage-container">
        <h1>Sign Up</h1>
        <h4>모든 항목은 필수입니다</h4>
        <form className="mypage-form" onSubmit={(e) => e.preventDefault()}>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">이메일</dt>
            <input
              type="text"
              className="mypage-content"
              onChange={handleInputValue("email")}
            />
          </dl>
          <dl className="mypage-form-error">{errorEmail}</dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호</dt>
            <input
              type="password"
              className="mypage-content"
              onChange={handleInputValue("password")}
            />
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호 확인</dt>
            <input
              type="password"
              className="mypage-content"
              onChange={handleInputValue("rePassword")}
            />
          </dl>
          <dl className="mypage-form-error">
            {errorPassword || errorRePassword}
          </dl>

          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">닉네임</dt>
            <input
              type="text"
              className="mypage-content"
              onChange={handleInputValue("nickname")}
            />
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">전화번호</dt>
            <input
              type="tel"
              className="mypage-content"
              onChange={handleInputValue("phone")}
            />
          </dl>
          <dl className="mypage-form-error">{errorPhone}</dl>
          <button
            className="sign-btn magin"
            type="submit"
            onClick={handleSignup}
          >
            회원가입 신청
          </button>
          <br />
          <br />
          <button className="sign-btn magin" onClick={handleGoback}>
            뒤로가기
          </button>
          <div className="error-content">
            <h3>{errorMessage}</h3>
            {/* <h3>{errorEmail}</h3>
            <h3>{errorPassword}</h3>
            <h3>{errorRePassword}</h3>
            <h3>{errorPhone}</h3> */}
          </div>
        </form>
      </center>
    </div>
  );
}

export default Signup;
