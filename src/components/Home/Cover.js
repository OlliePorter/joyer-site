import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.light,
      fontWeight: 300,
      margin: '20px',
      [theme.breakpoints.down('md')]: {
        margin: '30px',
        paddingTop: '15px',
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
      backgroundImage: 'url(/joyer-group.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '80vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: '95vh',
      },
    },
    heroOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: '95vh',
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
      position: 'absolute',
      marginTop: '12em',
      [theme.breakpoints.down('xs')]: {
        marginTop: '11em'
      },
    },
});

export default function Cover() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <div className={classes.heroOverlay}>
          <Typography component="h2" variant="h3" align="center" className={classes.title}>
            Love Your Clan.
          </Typography>
          <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
          JOYER is a wellbeing app for building high quality social connections. It’s the best way to maintain strong relationships and bring balance to your headspace.
          </Typography>
          <Button variant="contained" className={classes.button}>Coming Soon</Button>
          <KeyboardArrowDownIcon className={classes.downIcon} />
        </div>
      </div>
    </>
    );
}
