import React from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme';

const useStyles = makeStyles({
  coverImageOverlay: {
    backgroundColor: theme.palette.footer.dark,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    width: '100%',
    overflowX: 'hidden',
  },
  testimonialColumn: {
    display: 'flex',
    justifyContent: 'left',
    paddingLeft: '30px',
    paddingRight: '30px',
    flexDirection: 'column',
    width: '10vw',
  },
  featureRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '10px',
  },
  testimonialTextTitle: {
    color: 'white',
    fontWeight: 400,
    paddingBottom: '15px',
    textAlign: 'left',
  },
  testimonialTextSubtitle: {
    color: 'white',
    fontWeight: 300,
  },
  testimonialBorder: {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    width: '280px',
  },
  featureIcon: {
    color: theme.palette.footer.icon,
    transform: 'scale(1.5)',
    paddingTop: '30px',
    marginRight: '20px',
    "&:hover": {
    color: theme.palette.footer.iconHover,
    },
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
                  <div className={classes.testimonialColumn}>
                    <Typography className={classes.testimonialTextTitle} variant="body1">
                      Connect
                    </Typography>
                    <div className={classes.testimonialBorder}></div>
                      <div>
                        <FacebookIcon className={classes.featureIcon} onClick={()=> window.open("https://facebook.com/joyerapp", "_blank")}/>
                        <TwitterIcon className={classes.featureIcon} onClick={()=> window.open("https://twitter.com/joyer_app", "_blank")}/>
                        <InstagramIcon className={classes.featureIcon} onClick={()=> window.open("https://instagram.com/joyer_app", "_blank")}/>
                      </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.testimonialColumn}>
                    <Typography className={classes.testimonialTextTitle} variant="body1">
                      Contact Info
                    </Typography>
                    <div className={classes.testimonialBorder}></div>
                    <Typography className={classes.testimonialTextSubtitle} variant="body1">
                      Early Joyager
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.testimonialColumn}>
                    <Typography className={classes.testimonialTextTitle} component="subtitle1">
                      Legal
                    </Typography>
                    <div className={classes.testimonialBorder}></div>
                    <Typography className={classes.testimonialTextSubtitle} variant="subtitle1">
                      Early Joyager
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    );
}
