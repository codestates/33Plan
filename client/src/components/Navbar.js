import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLogin, handleLogout }) {
  // 로그인이 되었을때 nav-bar 메뉴 변경
  const handleIsLogin = isLogin;

  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <Link to="/" style={{ textDecoration: "none", color: "tomato" }}>
          {/* <div className="nav-item">33plan</div> */}
          <img
            className="logo-img"
            alt="33plan-logo"
            src="https://user-images.githubusercontent.com/87605663/157704472-41a9fb44-18bd-46ea-913d-ac30c65c7fb2.png"
          />
        </Link>
        <div className="nav-flex"></div>
        <Link
          to="/planner"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="nav-item">33Plan</div>
        </Link>
        {/* 로그인 여부에 따라 구성 변경 */}
        {handleIsLogin ? (
          <>
            <Link
              to="/mypage"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="nav-item">Mypage</div>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="nav-item" onClick={handleLogout}>
                Sign-Out
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="nav-item">Sign-Up</div>
            </Link>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="nav-item">Sign-In</div>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
