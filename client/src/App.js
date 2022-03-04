import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Metetest from './components/metatest/Metatest';
import Footer from './components/Footer';

import './App.css';
import Plannerpage from './pages/Plannerpage'

function App() {
  
  // 마이페이지
  const [isOpenMypage, setIsOpenMypage] = useState(false);

  const openMypageHandler = () => {
    setIsOpenMypage(true);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Mainpage />
          <div className="Second-page">
            <Metetest></Metetest>
            <Footer></Footer>
          </div>
        </Route>
        <Route exact path="/planner">
          <Plannerpage
            isOpenMypage={isOpenMypage}
            openMypageHandle={openMypageHandler}
          />
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
