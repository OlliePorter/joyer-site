import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
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
            paddingLeft: '120px',
            paddingRight: '120px',
            paddingBottom: '20px',
        },
    },
    textContainer: {
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            padding: '2em',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '2em',
        },
        [theme.breakpoints.up('md')]: {
            padding: '3em',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '7em',
        },
    },
    speechIcon: {
        color: theme.palette.primary.main,
        transform: 'scale(3)',
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    textCard: {
        width: "800px",
        height: "100%",
        background: "white",
        boxShadow: "0 0 20px -2px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "30px",
        paddingBottom: "50px",
    }
});

export default function Message() {
    const classes = useStyles();

    return (
    <div className={classes.textContainer}>
        <div className={classes.textCard}>
            <FavoriteIcon className={classes.speechIcon}/>
            <Typography component="h2" variant="h6" className={classes.subtitle} align="center">
                It’s more important than ever during these difficult times to stay socially connected. We at JOYER are proud to have built this magical app to help alleviate loneliness and bring you closer to your loved ones. We hope it makes a difference.
            </Typography>
        </div>
    </div>
    );
}