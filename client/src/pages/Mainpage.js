import React, { useState } from "react";
import NavSignIn from "../components/NavSignIn";
import NavSignOut from "../components/NavSignOut";
import Signin from "../components/sign/Signin";
import Signup from "../components/sign/Signup";
import Mypage from "../components/sign/Mypage";

function Mainpage() {
  /* TODO : Mainpage 만들기. */
  // 로그인 여부에 따른 변화
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // 마이페이지
  const [isOpenMypage, setIsOpenMypage] = useState(false);

  const openMypageHandler = () => {
    setIsOpenMypage(true);
  };

  // 로그인 후에 Nav-Bar에 로그아웃 버튼으로 변경
  const [isValidSignIn, setIsValidSignIn] = useState(true);

  const handleClose = function () {
    setIsSignin(false);
    setIsSignup(false);
    setIsOpenMypage(false);
  };

  const SignInHandler = function () {
    setIsSignin(true);
    setIsSignup(false);
  };

  const SignUpHandler = function () {
    setIsSignin(false);
    setIsSignup(true);
  };

  // 로그인 후에 Nav-Bar에 로그아웃 버튼으로 변경
  const authSignIn = function () {
    setIsValidSignIn(true);
  };

  return (
    <>
      {isValidSignIn ? (
        <NavSignOut openMypageHandler={openMypageHandler} />
      ) : (
        <NavSignIn
          SignInHandler={SignInHandler}
          SignUpHandler={SignUpHandler}
        />
      )}
      <div className="mainpage">
        <h2>니 자신을 알라</h2>
        <div className="mainpage-container">
          <div className="mainpage-content">
            원질이 노래하며 품으며, 그러므로 청춘 무엇이 그들의 칼이다. 얼마나
            찬미를 고행을 무엇을 구할 돋고, 인간에 것이다. 그것은 새 피고,
            목숨을 우리 끓는 뿐이다. 우리의 못하다 얼마나 보는 무엇이 군영과
            소금이라 약동하다. 같이 있는 그들은 가장 반짝이는 가치를 무한한 앞이
            생생하며, 그리하였는가?
          </div>
          <div className="mainpage-test">
            <button className="mainpage-test-btn">테스트하기</button>
          </div>
          <div className="mainpage-test">
            <button>스크롤 버튼</button>
          </div>
        </div>
      </div>
      <div className="signpage-container">
        {isSignin ? (
          <Signin authSignIn={authSignIn} handleClose={handleClose} />
        ) : null}
        {isSignup ? <Signup handleClose={handleClose} /> : null}
        {isOpenMypage ? <Mypage handleClose={handleClose} /> : null}
      </div>
    </>
  );
}

export default Mainpage;
