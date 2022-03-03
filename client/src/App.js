// import logo from './logo.svg';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Metetest from './components/metatest/Metatest';
import Footer from './components/Footer';
import './App.css';

function App() {
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
      </Switch>    
    </div>
  );
}

export default App;
