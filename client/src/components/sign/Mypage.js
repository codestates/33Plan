import React from "react";

function Mypage({ handleClose }) {
  //todo: 수정하기 버튼 click하면 input/완료버튼 표시

  return (
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
          <dt className="mypage-sub-title">닉네임</dt>
          <dd className="mypage-content">test</dd>
          <button className="mypage-content-btn">수정</button>
        </dl>
        <dl className="mypage-form-item">
          <dt className="mypage-sub-title">전화번호</dt>
          <dd className="mypage-content">010-1234-7842</dd>
          <button className="mypage-content-btn">수정</button>
        </dl>
        <button
          className="mypage-close-btn"
          type="submit"
          onClick={handleClose}
        >
          닫기
        </button>
      </form>
    </div>
  );
}

export default Mypage;
