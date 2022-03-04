import React from "react";
import { Link } from "react-router-dom";

function NavSignIn({ openMypageHandler }) {
  /* TODO : Nav 만들기. */
  const openMypageClick = () => {
    openMypageHandler();
  };
  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <Link to="/">
          <div className="nav-item">33plan</div>
        </Link>
        <div className="nav-flex"></div>
        <Link to="/">
          <div className="nav-item">Meta-test</div>
        </Link>
        <Link to="/planner">
          <div className="nav-item">Planner</div>
        </Link>
        <div className="nav-item" onClick={openMypageClick}>
          mypage
        </div>
        <div className="nav-item">Sign-Out</div>
      </nav>
    </div>
  );
}

export default NavSignIn;
