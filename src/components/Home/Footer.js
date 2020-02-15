import React from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import DraftsIcon from '@material-ui/icons/Drafts';
import MapIcon from '@material-ui/icons/Map';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme';

const useStyles = makeStyles({
  coverImageOverlay: {
    backgroundColor: theme.palette.footer.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  footerColumn: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '30px',
    paddingRight: '40px',
    paddingTop: '20px',
    flexDirection: 'column',
  },
  footerTextTitle: {
    color: 'white',
    fontWeight: 400,
    paddingBottom: '15px',
    textAlign: 'left',
  },
  footerRow: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.footer.light,
    textDecoration: 'none',
    "&:hover": {
      color: '#fff',
    },
  },
  footerTextSubtitle: {
    fontWeight: 300,
    marginBottom: '10px',
  },
  footerBorder: {
    [theme.breakpoints.down('sm')]: {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      width: '300px',
      marginBottom: '30px',
    },
    [theme.breakpoints.up('sm')]: {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      width: '150px',
      marginBottom: '30px',
    },
    [theme.breakpoints.up('md')]: {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      width: '300px',
      marginBottom: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      width: '300px',
      marginBottom: '30px',
    },
  },
  footerIcon: {
    color: theme.palette.footer.icon,
    transform: 'scale(1.5)',
    marginRight: '20px',
    "&:hover": {
    color: theme.palette.footer.iconHover,
    },
  },
  footerIconSmall: {
    marginRight: '10px',
    marginTop: '2px',
    marginBottom: '10px',
  },
});

export default function Footer() {
  const classes = useStyles();

    return (
        <div className={classes.coverImage}>
          <div className={classes.coverImageOverlay}>
            <div className={classes.coverPadding}>
              <Grid container spacing={10}>
                <Grid item xs={4}>
                  <div className={classes.footerColumn}>
                    <Typography className={classes.footerTextTitle} variant="body1">
                      Connect
                    </Typography>
                    <div className={classes.footerBorder}></div>
                    <div>
                      <FacebookIcon className={classes.footerIcon} onClick={()=> window.open("https://facebook.com/joyerapp", "_blank")}/>
                      <TwitterIcon className={classes.footerIcon} onClick={()=> window.open("https://twitter.com/joyer_app", "_blank")}/>
                      <InstagramIcon className={classes.footerIcon} onClick={()=> window.open("https://instagram.com/joyer_app", "_blank")}/>
                      <div className={classes.footerSpacing}></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.footerColumn}>
                      <Typography className={classes.footerTextTitle} variant="body1">
                        Contact Info
                      </Typography>
                      <span className={classes.footerBorder}></span>
                      <a href="mailto:hello@joyerapp.com" className={classes.footerRow}>
                        <DraftsIcon className={classes.footerIconSmall}/>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                        hello@joyerapp.com
                        </Typography>
                      </a>
                      <a href="" className={classes.footerRow}>
                        <MapIcon className={classes.footerIconSmall}/>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                          London
                        </Typography>
                      </a>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.footerColumn}>
                      <Typography className={classes.footerTextTitle} variant="subtitle1">
                        Legal
                      </Typography>
                    <div className={classes.footerBorder}></div>
                      <a href="https://drive.google.com/file/d/1CQFASq1SP3kqRxThlgYJTuEzpHqbfwOC/view" target="_blank" className={classes.footerRow}>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                          Terms and Conditions
                        </Typography>
                      </a>
                      <a href="https://drive.google.com/file/d/1fCh3jzo2QsYZyfmWP1MJakbFHaqdS9jm/view" target="_blank" className={classes.footerRow}>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                          Privacy Policy
                        </Typography>
                      </a>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    );
}
