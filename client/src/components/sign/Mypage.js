import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function Mypage({ userInfo, handleResponseUpdate }) {
  //todo: 수정하기 버튼 click하면 input/완료버튼 표시

  // 로그인시 사용자 정보 props로 전달됨
  const mypageUserinfo = { ...userInfo };

  // 사용자가 입력하는 값
  const [updateInfo, setUpdateInfo] = useState({
    password: null,
    rePassword: null,
    nickname: null,
    phone: null,
  });
  // 에러메세지 화면표시
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setUpdateInfo({ ...updateInfo, [key]: e.target.value });
  };
  
  // 유효성 검사
  const validateFuntion = {
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


  // 서버에 pacth요청
  const handleUpdate = () => {
    const {password, nickname, phone, rePassword} = updateInfo
    if (!password || !nickname || !phone || !rePassword) {
      setErrorMessage("모든항목을 입력해주세요.");
      let minutTimer =  setTimeout(()=>  setErrorMessage(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
    } else if (!validateFuntion.PW(password)) {
      setErrorPassword(
        "비밀번호를 문자,숫자,특수문자를 포함한 8자리 이상이여야 합니다."
      );
      let minutTimer =  setTimeout(()=>  setErrorPassword(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
      // 휴대폰 유효성 검사
    } else if (!validateFuntion.DoubleCheck(rePassword, password)) {
      setErrorRePassword("비밀번호가 일치 하지 않습니다.");
      let minutTimer =  setTimeout(()=>  setErrorRePassword(""),2000);
      return () => {
        clearTimeout(minutTimer);
      };
    } else if (!validateFuntion.Phone(phone)) {
      setErrorPhone("유효하지 않는 핸드폰번호 입니다.");
      let minutTimer =  setTimeout(()=>  setErrorPhone(""),2000);
      return () => {
        clearTimeout(minutTimer);
          // 비밀번호 더블체크
      };
    } else {
       axios
        .patch(
          "https://localhost:4000/users/update",
          {
            password: updateInfo.password,
            nickname: updateInfo.nickname,
            phone: updateInfo.phone,
          },
        )
        .then((res) => {
          if (res.data.message === "ok") {
            handleResponseUpdate();
            alert("수정이 완료 되었습니다. 다시 로그인 하세요.");
          }
        })
        .catch((err) => {
          setErrorMessage('이미 사용중인 닉네임 혹은 휴대폰번호가 존재합니다.')
        })
    }
  };
  // 로그인안하고 강제로 mypage로 접속시 막음
  if (!mypageUserinfo.email) {
    return (
      <div className="mainpage">
        <div className="mypage-container">
          <div className="mypage-form-item">
            <h2>로그인이 필요한 페이지 입니다.</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mainpage">
      <center className="mypage-container">
        <h1>Mypage</h1>
        <form className="mypage-form" onSubmit={(e) => e.preventDefault()}>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">이메일</dt>
            <dd className="mypage-content">{mypageUserinfo.email}</dd>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호</dt>
            <input
              className="mypage-content"
              type="password"
              placeholder={mypageUserinfo.password}
              onChange={handleInputValue("password")}
            ></input>
          </dl>
          <dl className="mypage-form-error">{errorPassword}</dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호 확인</dt>
            <input
              className="mypage-content"
              type="password"
              placeholder={mypageUserinfo.password}
              onChange={handleInputValue("rePassword")}
            ></input>
          </dl>
          <dl className="mypage-form-error">{errorRePassword}</dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">닉네임</dt>
            <input
              className="mypage-content"
              type="text"
              placeholder={mypageUserinfo.nickname}
              // value={mypageUserinfo.nickname}
              onChange={handleInputValue("nickname")}
            ></input>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">전화번호</dt>
            <input
              className="mypage-content"
              type="text"
              placeholder={mypageUserinfo.phone}
              // value={mypageUserinfo.nickname}
              onChange={handleInputValue("phone")}
            ></input>
          </dl>
          <dl className="mypage-form-error">{errorPhone}</dl>
            <button
              className="mypage-close-btn"
              type="submit"
              onClick={handleUpdate}
            >
              수정요청
            </button>
        </form>
        <h3>{errorMessage}</h3>
        
      </center>
    </div>
  );
}

export default Mypage;
