import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import SignUpForm from '../Home/SignUpForm'

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
    width: '35em',
    height: '35em',
    backgroundColor: 'white',
    borderRadius: '30px',
    opacity: '0.9',
    border: '1px solid #CCCCCC',
  }
});

export default function SignUp() {
  const classes = useStyles();

  return(
    <div className={classes.signUpContainer}>
      <div className={classes.signUpContainerOverlay}>
        <div className={classes.signUpRoundedCorners}>
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
}
