import React, { useState } from 'react';
import './Singin.css';
import styled from 'styled-components';
import axios from 'axios';

// export const ModalContainer = styled.div`
// // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
//   text-align: center;
//   margin: 120px auto;
//   width: 100%;
//   height: 100%;
// `;

// export const ModalBackdrop = styled.div`
//  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
//   position: fixed;
//   z-index: 999; // 이 백드롭이 가장 밑으로 가야한다. 
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.5); //#000 블랙  opacity 불투명도
// `;

// export const ModalBtn = styled.button`
//   background-color: #4000c7;
//   text-decoration: none;
//   border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
// `;

// export const ModalView = styled.div.attrs(props => ({
//     // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//     role: 'dialog'
//   }))`
//     width: 300px;
//     height: 100px;
//     padding: 1.5rem;
//     background: white;
//     border-radius: 2px;
//     margin: 0;
//   // TODO : Modal창 CSS를 구현합니다.
//     > span.close_btn {  // 이 꺽쇠를 사용했을때 
//       margin-top: 5px;
//       cursor: pointer;
//     }
//     > div.desc { 
//       margin-top: 25px;
//       color: #4000c7;
//     }
//   `;
  


function Signin ({isAuthenticated, handleClose}) {
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
       axios.post('https://localhost:4000/users/login', 
      {
        email: loginInfo.email,
        password: loginInfo.password
      },{
        headers: { 'Content-Type': 'application/json'}
      })
      .then((res) => {
        return isAuthenticated()
      })
    }
  };
  const handleModalClose = () => {
    handleClose()
  }

  return (
    <div className="sign-page">
      <center className="sign-page-container">
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