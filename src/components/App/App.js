import React from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";   
import Home from '../Home/Home';
import About from '../About/About';
import SignUp from '../SignUp/SignUp';
import DiscountLandingPage from '../DiscountLandingPage/DiscountLandingPage';
import NavBar from '../NavBar/NavBar';

function App() {
  return (  
    <HashRouter>
      <div>
        <NavBar/>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-us" component={About}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/discount" component={DiscountLandingPage}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
