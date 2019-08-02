// es6 functional based component
import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import Search from './features/search';
import Button from './features/buttons';
import BrowseCourses from './features/drop-down';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Courses = (props) => {

const classes = useStyles();
    
    if (props.children) {
    return (         
        
        <Grid container className="search-courses" xs={12} sm={12} spacing={0}>
            <h1>{props.children}</h1>

            <Grid container xs={12} sm={12} spacing={0}>
              <Search>Email</Search>
              <Button className={classes.button}>
                Search
              </Button>
              <BrowseCourses>Browse Courses</BrowseCourses>
              <BrowseCourses>Advanced Search</BrowseCourses>
            </Grid>
        </Grid>

        )
    } else {
        return <div>Invalid</div>
    }
}

export default Courses;