import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'; 
import Home from '../Home/Home';
import About from '../About/About';
import SignUp from '../SignUp/SignUp';
import DiscountLandingPage from '../DiscountLandingPage/DiscountLandingPage';

function App() {
  return (  
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about-us" component={About}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/discount" component={DiscountLandingPage}/>
    </Switch>
  </Router>
  );
}

export default App;
