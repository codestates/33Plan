import React, { useState} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Plannerpage from "./pages/Plannerpage";
import axios from "axios";
import Signin from "./components/sign/Signin"
import Signup from "./components/sign/Signup"


import "./App.css";

function App() {

  const history = useHistory();
  
  // 로그인 기능 
  const [isLogin, setIsLogin] = useState(false)
  
  const [userInfo, setUserinfo] = useState({
    email: '',
    nickName: '',
    mobile: '',
    // 플래너 내용:'',
  });
  
  // 로그아웃 클릭시 포스트 요청 및 화면전환
  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };

  return (
    <div className="App">
      {/* 네브바 로그인 여부를 props로 전달 필요*/}
      <Navbar isLogin={isLogin} handleLogout={handleLogout} />
        <Switch>
          {/* 메인페이지 라우터 */}
          <Route exact path="/">
            <Mainpage />
          </Route>
          {/* 플래너 페이지 */}
          <Route path="/planner">
            <Plannerpage userInfo={userInfo}/>
          </Route>
          {/* 로그인페이지 */}
          <Route path="/signin">
            <Mainpage />
            {/* <Signin isAuthenticated={isAuthenticated}/> */}
          </Route>
           {/* 회원가입 */}
          <Route path="/signup">
            <Mainpage />
            <Signup />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
