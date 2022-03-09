import React from "react";
import { Link } from "react-router-dom"


function Mypage({setIsLogin}) {
  //todo: 수정하기 버튼 click하면 input/완료버튼 표시

  const handleLogin = () => {
    setIsLogin(false)
  }


  return (
    <div className="mainpage">
      <div className="mypage-container">
        <h1>Mypage</h1>
        <form className="mypage-form" onSubmit={(e) => e.preventDefault()}>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">이메일</dt>
            <dd className="mypage-content">testuser@test.com</dd>
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
            <dd className="mypage-content">test</dd>
            <button className="mypage-content-btn">수정</button>
          </dl>
          <dl className="mypage-form-item">
            <dt className="mypage-sub-title">전화번호</dt>
            <dd className="mypage-content">010-1234-7842</dd>
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
