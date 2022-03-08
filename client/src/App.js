import React, { useState, useEffect} from "react";
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
  // 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  const isAuthenticated = async () => {
    await axios.get('https://localhost:4000/users/auth',
    {
      headers: { 'Content-Type': 'application/json'}, 
      withCredentials:true
    })
    .then((res) => {
      // 토큰이 복호화 되지 않을때 
      if(!res.data.data.userInfo) {
        setUserinfo(null)
        setIsLogin(false)
        return; 
      } else {
        setIsLogin(true)
        setUserinfo(res.data.data.userInfo)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  
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
``        <Route path="/planner">
            <Plannerpage userInfo={userInfo}/>
          </Route>
          {/* 로그인페이지 */}
          <Route path="/signin">
            <Mainpage />
            <Signin isAuthenticated={isAuthenticated}/>
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
