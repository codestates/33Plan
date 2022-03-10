import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ isLogin, handleLogout }) {
  // 로그인이 되었을때 nav-bar 메뉴 변경
  const handleIsLogin = isLogin;

  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <Link to="/" style={{ textDecoration: "none", color: "tomato" }}>
          <div className="nav-item">33plan</div>
        </Link>
        <div className="nav-flex"></div>
        <NavLink
          to="/planner"
          activeStyle={{
            color: "white",
          }}
        >
          <div className="nav-item">Planner</div>
        </NavLink>
        {/* 로그인 여부에 따라 구성 변경 */}
        {handleIsLogin ? (
          <>
            <Link to="/mypage">
              <div className="nav-item">Mypage</div>
            </Link>
            <NavLink
              to="/"
              activeStyle={{
                color: "black",
              }}
            >
              <div className="nav-item" onClick={handleLogout}>
                Sign-Out
              </div>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/signup"
              activeStyle={{
                color: "white",
              }}
            >
              <div className="nav-item">Sign-Up</div>
            </NavLink>
            <NavLink
              to="/login"
              activeStyle={{
                color: "white",
              }}
            >
              <div className="nav-item">Sign-In</div>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
