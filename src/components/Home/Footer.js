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
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25vh',
    width: '100%',
    overflowX: 'hidden',
  },
  footerColumn: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '30px',
    paddingRight: '40px',
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
  },
  footerTextSubtitle: {
    color: theme.palette.footer.light,
    fontWeight: 300,
    marginBottom: '10px',
  },
  footerBorder: {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    width: '300px',
    marginBottom: '30px',
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
    color: theme.palette.footer.light,
    marginRight: '10px',
    marginTop: '3px',
    marginBottom: '10px',
  }
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
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.footerColumn}>
                      <Typography className={classes.footerTextTitle} variant="body1">
                        Contact Info
                      </Typography>
                      <span className={classes.footerBorder}></span>
                      <div className={classes.footerRow}>
                        <DraftsIcon className={classes.footerIconSmall}/>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                          hello@joyerapp.com
                        </Typography>
                      </div>
                      <div className={classes.footerRow}>
                        <MapIcon className={classes.footerIconSmall}/>
                        <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                          London
                        </Typography>
                      </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.footerColumn}>
                      <Typography className={classes.footerTextTitle} component="subtitle1">
                        Legal
                      </Typography>
                    <div className={classes.footerBorder}></div>
                      <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                        Terms and Conditions
                      </Typography>
                      <Typography className={classes.footerTextSubtitle} variant="subtitle1">
                        Privacy Policy
                      </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    );
}
