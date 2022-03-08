import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Metetest from './components/metatest/Metatest';
import Footer from './components/Footer';

import './App.css';
import Plannerpage from './pages/Plannerpage'

function App() {
  // 로그인 된 상태
  // const [isValidSignIn, setIsValidSignIn] = useState(true)
  return (
    <div className="App">
      {/* <NavSign IsValidSignIn={IsValidSignIn}/> */}
      <Switch>
        <Route exact path="/">
          <Mainpage />
          <div className="Second-page">
            <Metetest></Metetest>
            <Footer></Footer>
          </div>
        </Route>
        <Route exact path="/planner">
          <Plannerpage />
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
