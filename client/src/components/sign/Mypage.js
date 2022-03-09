import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

function Mypage({ setIsLogin, userInfo }) {
  //todo: 수정하기 버튼 click하면 input/완료버튼 표시

  const handleLogin = () => {
    setIsLogin(false);
  };

  const mypageUserinfo = { ...userInfo };

  return (
    <div className="mainpage">
      <div className="mypage-container">
        <h1>Mypage</h1>
        <form className="mypage-form" onSubmit={(e) => e.preventDefault()}>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">이메일</dt>
            <dd className="mypage-content">{mypageUserinfo.email}</dd>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호</dt>
            <dd className="mypage-content">******</dd>
            <button className="mypage-content-btn">수정</button>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">비밀번호</dt>
            <dd className="mypage-content">******</dd>
            <button className="mypage-content-btn">수정</button>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">닉네임</dt>
            <dd className="mypage-content">{mypageUserinfo.nickname}</dd>
            <button className="mypage-content-btn">수정</button>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">전화번호</dt>
            <dd className="mypage-content">{mypageUserinfo.phone}</dd>
            <button className="mypage-content-btn">수정</button>
          </dl>

          <Link to="/login">
            <button
              className="mypage-close-btn"
              type="submit"
              onClick={handleLogin}
            >
              수정요청
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Mypage;
