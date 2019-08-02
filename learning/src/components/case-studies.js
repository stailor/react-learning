// es6 functional based component
import React from 'react';
import { Grid, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Search from './features/search';
import HomeIcon from './features/placeholder-image';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const Recently = (props) => {
    const classes = useStyles();
    
    if (props.children) {
    return ( 
        <Grid container className="case-studies" item xs={12} sm={12} spacing={0}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3" component="h3" gutterBottom>
                  {props.children}
                </Typography>
                
                <Typography variant="p" component="p" gutterBottom>
                  Sign up for our newsletter and we'll send you through a new case study every Monday!
                </Typography>
                <Grid container>
                  <Search>Email</Search>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Sign me up
                  </Button>
                </Grid>
                <Typography variant="p" component="p" gutterBottom>
                  Unsubscribe at anytime.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <HomeIcon></HomeIcon>
              </Grid>
        </Grid>
        )
    } else {
        return (
            <Grid container className="case-studies" item xs={12} sm={12} spacing={0}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" component="h3" gutterBottom>
                Want to learn by answering case studies?
              </Typography>
              
              <Typography variant="p" component="p" gutterBottom>
                Sign up for our newsletter and we'll send you through a new case study every Monday!
              </Typography>
              <Grid container>
                <Search/>            
                <Button variant="contained" color="primary" className={classes.button}>
                  Primary
                </Button>
              </Grid>
              <Typography variant="p" component="p" gutterBottom>
                Unsubscribe at anytime.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <HomeIcon></HomeIcon>
            </Grid>
      </Grid>
        )
    }
}

export default Recently;