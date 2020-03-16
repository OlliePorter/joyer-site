import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink,
} from "react-router-dom";
import Logo from '../../assets/JOYER_APP_LOGO.png';
import Button from '@material-ui/core/Button';

export default function NavBar() {
    return(
        <ul className="outer-nav-container">
        <img src={Logo} className="joyer-logo" alt="JOYER logo"/>
        <div className="inner-nav-container">
            <li><NavLink exact to="/" className="joyer-text">Home</NavLink></li>
            <li><NavLink exact to="/about-us" className="joyer-text">About Us</NavLink></li>
            <li><Button component={Link} variant="outlined" to="/sign-up" className="nav-button">Sign Up</Button></li>
        </div>
    </ul>
    );
}