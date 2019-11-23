import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "../../assets/JOYER_APP_LOGO.png";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  outerNavContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0,
    height: '70px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  innerNavContainer: {
    display: 'flex',
    justifyContent: 'right',
    flexDirection: 'row',
  },
  joyerLogo: {
    height: '35px',
    width: '30px',
    paddingTop: '2em',
    paddingRight: '16em',
  },
  joyerText: {
    color: 'white',
    paddingTop: '1.7em',
    paddingRight: '2em',
  },
  navButton: {
    height: '35px',
    width: '90px',
    borderRadius: '20px',
    textTransform: 'none',
    color: 'white',
    borderColor: 'white',
    marginTop: '2.5em',
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.outerNavContainer}>
      <img src={Logo} className={classes.joyerLogo}/>
      <div className={classes.innerNavContainer}>
      <p className={classes.joyerText}>Home</p>
      <p className={classes.joyerText}>About Us</p>
      <Button variant="outlined" href="#outlined-buttons" className={classes.navButton}>Sign Up</Button>
      </div>
    </nav>
  );
}
