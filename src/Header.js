import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "./assets/JOYER_APP_LOGO.png";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  navContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0,
    height: '70px',
    display: 'flex',
  },
  joyerLogo: {
    height: '35px',
    width: '30px',
    paddingTop: '2em',
    paddingLeft: '16em',
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.navContainer}>
      <img src={Logo} className={classes.joyerLogo}/>
    </nav>
  );
}
