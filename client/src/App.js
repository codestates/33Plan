// import logo from './logo.svg';
import React from 'react';
import Mainpage from './pages/Mainpage';
import Metetest from './components/metatest/Metatest';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Mainpage></Mainpage>
      <Metetest></Metetest>
      <Footer></Footer>
    </div>
  );
}

export default App;
