import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
    title: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        padding: '10px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '20px',
            paddingBottom: '40px',
        },
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
        },
    },
    subtitle: {
        color: theme.palette.secondary.dark,
        padding: '8px',
        fontWeight: 300,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '0px',
        },
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '300px',
            paddingRight: '300px',
            paddingBottom: '20px',
        },
    },
    altTitle: {
        color: theme.palette.secondary.dark,
        fontWeight: 300,
        padding: '50px',
    },
    textContainer: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '2em',
        },
        [theme.breakpoints.up('sm')]: {
            margin: '2em',
        },
        [theme.breakpoints.up('md')]: {
            margin: '3em',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '7em',
        },
    },
    speechIcon: {
        color: theme.palette.primary.main,
        transform: 'scale(3)',
        paddingTop: '40px',
        paddingBottom: '40px',
    }
});

export default function TitleInfo() {
    const classes = useStyles();

    return (
    <div className={classes.textContainer}>
        <PeopleIcon className={classes.speechIcon}/>
        <Typography component="h2" variant="h4" className={classes.title} align="center">
            Just Optimise Your Everyday Relationships.
        </Typography>
        <Typography component="h2" variant="h6" className={classes.subtitle} align="center">
            Social distancing has isolated the global community away from face-to-face contact due to Coronavirus. These new social distancing measures are already having a profound impact on people’s mental health, with loneliness and mental health issues at an all time high. JOYER is here to help. Our goal is simple — provide a wellbeing app which promotes digital interactions and enables users to send discounted gifts to loved ones. Here's how it works:
        </Typography>
    </div>
    );
}