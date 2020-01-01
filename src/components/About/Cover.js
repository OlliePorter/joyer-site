import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.light,
      fontWeight: 300,
      margin: '20px',
      [theme.breakpoints.down('sm')]: {
        margin: '30px',
        paddingTop: '30px',
      },
    },
    subtitle: {
      color: theme.palette.primary.light,
      padding: '8px',
      fontWeight: 300,
      width: '60%',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    heroContent: {
      backgroundImage: 'url(/airship.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '45vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
      },
    },
    heroOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '45vh',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
      },
    },
    button: {
      width: '179px',
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      height: '52px',
      fontSize: '17px',
      borderRadius: '50px',
      margin: '30px',
      textTransform: 'none',
      "&:hover": {
      background: theme.palette.primary.dark,
      },
    },
    downIcon: {
      color: 'white',
      transform: 'scale(1.5)',
      position: 'relative',
      top: '200px',
    },
});

export default function Cover() {
  const classes = useStyles();

    return (
    <>
    <div className={classes.heroContent}>
      <div className={classes.heroOverlay}>
        <Typography component="h2" variant="h3" align="center" className={classes.title}>
          Our Mission:
        </Typography>
        <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
        Promote collective wellbeing through stronger, healthier relationships.
        </Typography>
      </div>
    </div>
    </>
    );
}
