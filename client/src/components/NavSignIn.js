import React from 'react';
import { Link } from 'react-router-dom';

function NavSignIn ({SignUpHandler, SignInHandler}) {
  /* TODO : Nav 만들기. */
  
  const SignInClick = function (){
    SignInHandler()
  }

  const SignUpClick = function (){
    SignUpHandler()
  }



  return (
    <div>
      <nav className="nav-container">
        {/* 로고자리에 이미지로 변경도 가능 */}
        <Link to="/">
          <div className="nav-item">33plan</div>
        </Link>
        <div className="nav-flex"></div>
        <div className="nav-item">Meta-test</div>
        <div className="nav-item">Planner</div>
        <div className="nav-item" onClick={SignUpClick}>Sign-Up</div>
        <div className="nav-item" onClick={SignInClick}>Sign-In</div>
      </nav>
    </div>
  );
}

export default NavSignIn;