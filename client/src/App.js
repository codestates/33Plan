import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Plannerpage from "./pages/Plannerpage";
import Signin from "./components/sign/Signin";
import Signup from "./components/sign/Signup";
import Mypage from "./components/sign/Mypage";
import axios from "axios";

import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  const history = useHistory();

  // 로그인 되면 nav바 내용 변경
  const [isLogin, setIsLogin] = useState(false);

  const [userInfo, setUserinfo] = useState({
    id: "",
    email: "",
    nickname: "",
    phone: "",
  });

  // 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  const isAuthenticated = async () => {
    await axios
      .get("https://localhost:4000/users/auth", {
        headers: { Accept: "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        // 토큰이 복호화 되지 않을때
        if (!res.data.data.userInfo) {
          setUserinfo(null);
          setIsLogin(false);
          return;
        } else {
          setUserinfo(res.data.data.userInfo);
          setIsLogin(true);
          history.push("/");  
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  // 로그아웃 클릭시 포스트 요청 및 메인페이지로 이동
  const handleLogout = () => {
    axios
      .post(
        "https://localhost:4000/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUserinfo(null);
        setIsLogin(false);
        history.push("/");
      });
  };

  // 회원정보 업데이트 후 로그아웃
  const handleResponseUpdate = () => {
    handleLogout();
  };

  return (
    <div className="App">
      {/* 네브바 로그인 여부를 props로 전달 필요*/}
      <Navbar
        setIsLogin={setIsLogin}
        handleLogout={handleLogout}
        isLogin={isLogin}
      />
      <Switch>
        {/* 메인페이지 라우터 */}
        <Route exact path="/">
          <Mainpage />
        </Route>
        {/* 플래너 페이지 */}
        <Route path="/planner">
          <Plannerpage userInfo={userInfo} />
        </Route>
        {/* 유저정보 */}
        <Route path="/mypage">
          <Mypage
            userInfo={userInfo}
            handleResponseUpdate={handleResponseUpdate}
          />
        </Route>
        {/* 로그인페이지 */}
        <Route path="/login">
          <Signin handleResponseSuccess={handleResponseSuccess} />
        </Route>
        {/* 회원가입 */}
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
