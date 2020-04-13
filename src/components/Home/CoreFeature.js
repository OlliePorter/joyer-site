import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
    title: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        margin: '0px',
        paddingTop: '180px',
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
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '1em',
            width: '80%',
            padding: '35px',
            textAlign: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            padding: '50px',
            textAlign: 'center',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%',
            padding: '0px',
            textAlign: 'left',
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
        objectFit: 'contain',
        [theme.breakpoints.down('md')]: {
            width: '400px',
            height: '600px',
            alignSelf: 'center',
            paddingBottom: '80px',
        },
    }
});

export default function CoreFeature(props) {
const classes = useStyles();

return(
        <div className={classes.coverBackground}>
            <div>
                <Typography component="h2" variant="h3" className={classes.title}>
                {props.title}
                </Typography>
                <Typography component="h2" variant="h6" className={classes.subtitle}>
                {props.body}
                </Typography>
            </div>
            <img src={props.imageSrc} className={classes.iPhone} alt={props.imageAlt} />
        </div>
    );
}