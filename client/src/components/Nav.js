import React from 'react';

function Nav () {
  /* TODO : Nav 만들기. */
//리액트 라우터로 연결 해야 할것 
  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <div className="nav-item">33plan</div>
        <div className="nav-flex"></div>
        <div className="nav-item">Meta-test</div>
        <div className="nav-item">Planner</div>
        <div className="nav-item">Sign-Up</div>
        <div className="nav-item">Sign-In</div>
      </nav>
    </div>
  );
}

export default Nav;