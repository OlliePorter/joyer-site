import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles ({
  signUpContainer: {
      backgroundImage: 'url(/joyer-group.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
  },
  signUpContainerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
  },
  signUpRoundedCorners: {
    backgroundColor: 'white',
    borderRadius: '30px',
    opacity: '0.9',
    border: '1px solid #CCCCCC',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
      width: '20em',
      height: '25em',
    },
    [theme.breakpoints.up('sm')]: {
      width: '26em',
      height: '25em',
    },
    [theme.breakpoints.up('md')]: {
      width: '32em',
      height: '30em',
    },
    [theme.breakpoints.up('lg')]: {
      width: '32em',
    height: '30em',
    },
  },
  title: {
    color: theme.palette.secondary.dark,
    fontWeight: 300,
    padding: '10px',
    paddingTop: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0.7em',
    },
  },
  subtitle: {
    color: theme.palette.secondary.dark,
    padding: '8px',
    fontWeight: 300,
    paddingBottom: '70px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10px',
    },
  },
  nameInput: {
    padding: '8px 15px',
    lineHeight: '1.428571429',
    margin: '15px',
    border: '1px solid #cccc',
    borderRadius: '2px',
    textShadow: 'none',
    height: '20px',
    width: '150px',
    fontSize: '15px',
    fontFamily: 'roboto',
    "&:focus": {
      outline: 'none',
      border: '1px solid #49d0be',
    },
  },
  emailInput: {
    padding: '8px 16px',
    lineHeight: '1.428571429',
    margin: '15px',
    border: '1px solid #cccc',
    borderRadius: '2px',
    textShadow: 'none',
    height: '20px',
    width: '360px',
    fontSize: '15px',
    fontFamily: 'roboto',
    "&:focus": {
      outline: 'none',
      border: '1px solid #49d0be',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  signUpButton: {
    fontSize: '15px',
    borderRadius: '24px',
    width: '150px',
    height: '40px',
    padding: '8px 16px',
    fontFamily: 'roboto',
    fontWeight: 400,
    borderColor: '#1e1e1e',
    backgroundColor: '#444',
    color: 'white',
    margin: '15px',
    cursor: 'pointer',
    verticalAlign: 'middle',
    "&:hover": {
      backgroundColor: '#333',
    },
  }
});

export default function SignUp() {
  const classes = useStyles();

  return(
    <div className={classes.signUpContainer}>
      <div className={classes.signUpContainerOverlay}>
        <div className={classes.signUpRoundedCorners}>
          <Typography component="h2" variant="h4" className={classes.title}>
            Become a Joyager
          </Typography>
          <Typography component="p" className={classes.subtitle}>
          Subscribe for the latest updates.
          </Typography>
          <form action="https://joyerapp.us20.list-manage.com/subscribe/post?u=9c4cca26d3bea1021320b9967&id=10b0082a7c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
            <div className="mc-field-group">
              <input type="text" name="FNAME" className={classes.nameInput} id="mce-FNAME" placeholder="First Name"/>
              <input type="text" name="LNAME" className={classes.nameInput} id="mce-LNAME" placeholder="Last Name"/>
            </div>
            <div>
              <input type="email" name="EMAIL" className={classes.emailInput} id="mce-EMAIL" placeholder="Email"/>
            </div>
            <div>
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Sign Up" className={classes.signUpButton}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
