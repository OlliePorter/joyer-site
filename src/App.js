import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import Logo from "./assets/JOYER_APP_LOGO.png";

function App() {
  return (
    <HashRouter>
      <div>
        <ul className="outer-nav-container">
            <img src={Logo} className="joyer-logo"/>
            <div className="inner-nav-container">
            <li><NavLink to="/" className="joyer-text">Home</NavLink></li>
            <li><NavLink to="/about-us" className="joyer-text">About Us</NavLink></li>
            </div>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about-us" component={About}/>
          </div>
      </div>
    </HashRouter>
  );
}

export default App;
