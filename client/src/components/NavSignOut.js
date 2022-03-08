import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';


function NavSignOut({ openMypageHandler }) {
  /* TODO : Nav 만들기. */
  const openMypageClick = () => {
    openMypageHandler();
  };
 
  const history = useHistory();

  const handleLogout = () => {
    axios.post('https://localhost:4000/users/logout')
    .then((res) => {
      //
      // setUserinfo(null);
      // setIsLogin(false);
      history.push('/');
    });
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
        <div className="nav-item" onClick={handleLogout}>Sign-Out</div>
      </nav>
    </div>
  );
}

export default NavSignOut;
