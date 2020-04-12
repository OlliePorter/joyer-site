import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import { ReactComponent as IphoneGoals } from '../../assets/iphone_joyage.svg';

const useStyles = makeStyles({
    title: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        margin: '0px',
        paddingTop: '150px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '80px',
            textAlign: 'center',
        },
    },
    subtitle: {
        color: theme.palette.secondary.dark,
        padding: '8px',
        fontWeight: 300,
        paddingBottom: '8em',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            paddingBottom: '1em',
            width: '80%',
            padding: '35px',
            textAlign: 'center',
        },
    },
    coverText: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    coverBackground: {
        padding: '70px',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '180px',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            flexDirection: 'column',
        },
    },
    iPhone: {
        width: '600px',
        height: '600px',
        [theme.breakpoints.down('md')]: {
            width: '400px',
            height: '600px',
            alignSelf: 'center',
            paddingBottom: '80px',
        },
    }
});

export default function CoreFeature() {
const classes = useStyles();

return(
    <div className={classes.coverBackground}>
        <div classname={classes.coverText}>
            <Typography component="h2" variant="h3" className={classes.title}>
            1. Goal Setting
            </Typography>
            <Typography component="h2" variant="h6" className={classes.subtitle}>
            See more friends each week by setting a personalised social goal called a Joyage. For introverts, extroverts & not-a-lot-of-time-troverts, choose a cadence that works for you.
            </Typography>
        </div>
        <IphoneGoals className={classes.iPhone}/>
    </div>
    );
}
