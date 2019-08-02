// es6 functional based component
import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

import logo from '../images/logo.png';
import Search from './features/search';
import BrowseCourses from './features/drop-down';
import Button from './features/buttons';

// For the links to work:
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
    },
  }));

const Nav = () => {
    
  const classes = useStyles();
  return ( 
      

      <Grid container className="nav" item xs={12} sm={12} spacing={0}>          

        <Grid container direction="row" justify="flex-end" alignItems="flex-start" className="login-links" item xs={12} sm={12} spacing={0}>
          
          <NavLink to="/logged-in">Logged In  &nbsp; | &nbsp;</NavLink>
          <NavLink to="/logged-out">Logged Out</NavLink>

        </Grid>

        <Grid container className="brand-logo" alignItems="center" item xs={12} sm={2}>
            <Link to="/logged-out">
                <img src={logo} alt="placeholder" width="150" />
            </Link>
        </Grid>

        <Grid container className="nav-search" direction="row" justify="flex-start" alignItems="center" spacing={0} item xs={12} sm={8}>
            <Search></Search>
            <Button className={classes.button}>
              Search
            </Button>
            <BrowseCourses>Browse courses</BrowseCourses>
        </Grid>  

        <Grid container className="nav-links" direction="row" justify="flex-end" item xs={12} sm={2} spacing={0}>
          <Typography>
            <Link href={'www.google.com'}>
              My Portfolio
            </Link>
          </Typography>
          <Typography>
            <Link href={'www.google.com'}>
              My Account
            </Link>
          </Typography>
        </Grid>  

      </Grid>

    
  
  )
}

export default Nav;