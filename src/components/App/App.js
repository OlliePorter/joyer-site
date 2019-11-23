import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import Logo from '../../assets/JOYER_APP_LOGO.png';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <HashRouter>
      <div>
        <ul className="outer-nav-container">
            <img src={Logo} className="joyer-logo"/>
            <div className="inner-nav-container">
              <li><NavLink to="/" className="joyer-text">Home</NavLink></li>
              <li><NavLink to="/about-us" className="joyer-text">About Us</NavLink></li>
              <li><Button component={Link} variant="outlined" to="/sign-up" className="nav-button">Sign Up</Button></li>
            </div>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about-us" component={About}/>
            <Route path="/sign-up" component={SignUp}/>
          </div>
      </div>
    </HashRouter>
  );
}

export default App;
