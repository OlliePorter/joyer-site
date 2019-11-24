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
import SignUp from '../SignUp/SignUp';
import Logo from '../../assets/JOYER_APP_LOGO.png';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <HashRouter>
      <div>
        <ul className="outer-nav-container">
            <img src={Logo} className="joyer-logo" alt="JOYER logo"/>
            <div className="inner-nav-container">
              <li><NavLink exact to="/" className="joyer-text">Home</NavLink></li>
              <li><NavLink exact to="/about-us" className="joyer-text">About Us</NavLink></li>
              <li><Button exact component={Link} variant="outlined" to="/sign-up" className="nav-button">Sign Up</Button></li>
            </div>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
            <Route exact path="/sign-up" component={SignUp}/>
          </div>
      </div>
    </HashRouter>
  );
}

export default App;
