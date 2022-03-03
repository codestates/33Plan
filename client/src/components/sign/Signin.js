import React, { useState } from 'react';
import axios from 'axios';


function Signin ({authSignIn, handleClose}) {
  /* TODO : Mainpage 만들기. */
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin =  () => {
    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    if(!loginInfo.email || !loginInfo.password) {
      return setErrorMessage('이메일과 비밀번호를 입력하세요');
    } else {
       axios.post('https://localhost:4000/signin', 
      {
        email: loginInfo.email,
        password: loginInfo.password
      },{
        headers: { 'Content-Type': 'application/json'}
      })
      .then((res) => {
        return authSignIn()
      })
    }
  };
  const handleModalClose = () => {
    handleClose()
  }




  return (
    <div className="sign-page">
      <center>
        <h1>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="sign-form">
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')}/>
          </div>
          <div className="sign-form">
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <div className="sign-form">
            <div>회원가입</div>
          </div>
          <button className="sign-form" type='submit' onClick={handleLogin}>
            로그인
          </button>
          <br />
          <button className="sign-form" type='submit' onClick={handleModalClose}>
            닫기
          </button>
          <div className="sign-form">{errorMessage}</div>
        </form>
      </center>

    </div>
  );
}

export default Signin;