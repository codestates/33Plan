import React, { useState } from 'react';
import axios from 'axios';
import "./Signin.css";
import { useHistory } from "react-router-dom";


function Signup () {
  /* TODO : Mainpage 만들기. */
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    rePassword:'',
    nickname: '',
    phone: ''
  });
  // 에러메세지
  const [errorMessage, setErrorMessage] = useState('');

  // 비밀번호 일치여부 확인 
  const [errorPassword, setErrorPassword] = useState('');


   
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    isValid();
  };
  const handleSignup = async () => {
    const {email, password, nickname, phone} = userInfo
    if(!email || !password || !nickname || !phone) {
      return setErrorMessage("모든 항목은 필수입니다")
    }
    console.log("회원정보 요청 ",userInfo)
    await axios.post('https://localhost:4000/users/signup',
      userInfo ,{
      headers: { 'Content-Type': 'application/json'}
    })
    .then((res)=>{
      // 회원가입 완료 되면 첫 페이지로 돌아가게한다.
       if(res.data.message === 'Successfully Signed Up'){
        return history.push('/')
       }
    }).catch((err)=>{
      console.log(err)
    })
  };

  // 비밀번호 유효성 검사 확인 
  const isValid = () => {
    if(String(userInfo.password) !== String(userInfo.rePassword)){
      setErrorPassword('비밀번호가 일치하지 않습니다.')
    } else {
      setErrorPassword(null)
    }
  }


  // 회원가입 뒤로가기 기능 
  const history = useHistory()

  const handleGoback = () => {
    return history.push('/')
  }

  return (
    <div className="mainpage">
    <center className="mypage-container">
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
          <span>비밀번호 확인</span>
          <input
            type='password'
            onChange={handleInputValue('rePassword')}
          />
        </div>
        <div className="sign-form">{errorPassword}</div>
        <div className="sign-form">
          <span>닉네임</span>
          <input type='text' onChange={handleInputValue('nickname')}/>
        </div>
        <div className="sign-form">
          {' '}
          <span>전화번호</span>{' '}
          <input type='tel'  onChange={handleInputValue('phone')}/>
        </div>
          <button
            className='btn btn-signup'
            type='submit'
            onClick={handleSignup}
          >회원가입 신청
          </button>
          <div className="sign-form">{errorMessage}</div>
          <br />
          <br />
          <button className="sign-form" onClick={handleGoback}>뒤로가기</button>
      </form>
    </center>
  </div>
  );
}

export default Signup;