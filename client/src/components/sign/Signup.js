import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Signup ({handleClose}) {
  /* TODO : Mainpage 만들기. */
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    nickname: '',
    mobile: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  // const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = async () => {
    // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
    const {email, password, nickname, mobile} = userinfo
    if(!email || !password || !nickname || !mobile) {
      return setErrorMessage("모든 항목은 필수입니다")
    }
    console.log("회원정보 요청 ",userinfo)
    await axios.post('https://localhost:4000/users/signup',
       userinfo ,{
      headers: { 'Content-Type': 'application/json'}
    })
    .then((res)=>{
       if(res.data.message === 'ok'){
          handleModalClose();
       }
      // 회원가입 완료 되면 첫 페이지로 돌아가게한다.
    }).catch((err)=>{
      console.log(err)
    })
  };

  const handleModalClose = () => {
    handleClose()
  };

  return (
    <div className="sign-page">
    <center className="signup-page-container">
      <h1>Sign Up</h1>
      <div>모든 항목은 필수입니다</div>
      <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
        <div className="sign-form">
          <span>이메일</span>
          <input type='email' onChange={handleInputValue('email')} />
        </div>
        <div className="sign-form">
          <span>비밀번호</span>
          <input
            type='password'
            onChange={handleInputValue('password')}
          />
        </div>
        <div className="sign-form">
          <span>닉네임</span>
          <input type='text' onChange={handleInputValue('nickname')}/>
        </div>
        <div className="sign-form">
          {' '}
          <span>전화번호</span>{' '}
          <input type='tel'  onChange={handleInputValue('mobile')}/>
        </div>
        <button
          className='btn btn-signup'
          type='submit'
          onClick={handleSignup}
        >
          회원가입 신청
        </button>
        <br />
        <br />
        <button
          className='btn btn-signup'
          type='submit'
          onClick={handleModalClose}
        >
          닫기
        </button>
        <div className="sign-form">{errorMessage}</div>
      </form>
    </center>
  </div>
  );
}

export default Signup;