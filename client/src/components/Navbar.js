import React from "react";
import { NavLink,Link } from "react-router-dom";


function Navbar ({isLogin, handleLogout}) {
  // 로그인이 되었을때 nav-bar 메뉴 변경
  const handleIsLogin = isLogin

  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <NavLink to="/"
        activeStyle={{
          color: "white"
        }}>
          <div className="nav-item">33plan</div>
        </NavLink>
        <div className="nav-flex"></div>
        <Link to="/planner">
          <div className="nav-item">Planner</div>
        </Link>
        {/* 로그인 여부에 따라 구성 변경 */}
          {
            handleIsLogin
            ? <>
                <Link to="/mypage">
                  <div className="nav-item">Mypage</div>
                </Link>
                <Link to="/">  
                  <div className="nav-item" onClick={handleLogout}>Sign-Out</div>
                </Link>
              </>  
            : <>
                <Link to="/signup">
                  <div className="nav-item">Sign-Up</div>
                </Link>
                <Link to="/login">
                  <div className="nav-item">Sign-In</div>
                </Link>
              </>
          }
      </nav>
    </div>
  );
}

export default Navbar;
