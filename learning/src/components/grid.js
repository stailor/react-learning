import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import placeholder from '../images/sample-1.jpg';
import logo from '../images/logo.png';

import Search from './search';
import BrowseCourses from './split-button-browse-courses';
import MediaCard from './media-card';
import Container from '@material-ui/core/Container';
import Button from './buttons';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <div className={classes.root}>
      <Grid container>


        <Grid container className="nav" item xs={12} sm={12} spacing={0}>  
            
          <Grid container className="brand-logo" alignItems="center" item xs={6} sm={2}>
              <a href="/" >
                  <img src={logo} alt="placeholder" width="150" />
              </a>
          </Grid>

          <Grid container className="nav-search" direction="row" justify="flex-start" alignItems="center" spacing={0} item xs={6} sm={8}>
              <Search></Search>
              <Button className={classes.button}>
                Search
              </Button>
              <BrowseCourses></BrowseCourses>
          </Grid>  

          <Grid container className="nav-links" direction="row" justify="flex-end" item xs={6} sm={2} spacing={0}>
            <Typography>
              <Link href={'www.google.com'} className={classes.link}>
                My Portfolio
              </Link>
            </Typography>
            <Typography>
              <Link href={'www.google.com'} className={classes.link}>
                My Account
              </Link>
            </Typography>
          </Grid>  

      </Grid>
        
        <Grid container className="search-courses" xs={12} sm={12} spacing={0}>
          <Grid item spacing={6}>
            <h1>Courses to help you learn at every stage of your career</h1>
            <Search/>
            <BrowseCourses></BrowseCourses>
          </Grid>
        </Grid>

        <Grid container className="specialty" item xs={12} sm={12} spacing={0}>  

          <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
              Browse by specialty
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>        
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>        
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <MediaCard/>            
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>          
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>        
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>        
          <Grid item xs={6} sm={2}>
            <MediaCard/>
          </Grid>

        </Grid>

        <Grid container className="recently" item xs={12} sm={12} spacing={0}>  
        <Grid item xs={12} sm={12}>  
          <Typography variant="h2" component="h2" gutterBottom>
            Recently updated
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard/>
        </Grid>
      </Grid>

        <Grid container className="why" item xs={12} sm={12} spacing={0}>  
          <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
              Why BMJ Learning?
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MediaCard/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MediaCard/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MediaCard/>
          </Grid>
        </Grid>

        <Grid container className="case-studies" item xs={12} sm={12} spacing={0}>
              <Grid item xs={6} sm={6}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Want to learn by answering case studies?
                </Typography>
                
                <Typography variant="p" component="p" gutterBottom>
                  Sign up for our newsletter and we'll send you through a new case study every Monday!
                </Typography>

                <Search/>            
                <Button variant="contained" color="primary" className={classes.button}>
                  Primary
                </Button>
                
                <Typography variant="p" component="p" gutterBottom>
                  Unsubscribe at anytime.
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <img src={placeholder} alt="placeholder" />
              </Grid>
        </Grid>
        
        <Grid container className="recommended" item xs={12} sm={12} spacing={0}>  
          <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
              Highly recommended by doctors
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
              <MediaCard/>
          </Grid>
          <Grid item xs={6} sm={3}>
              <MediaCard/>
          </Grid>
          <Grid item xs={6} sm={3}>
              <MediaCard/>
          </Grid>
          <Grid item xs={6} sm={3}>
              <MediaCard/>
          </Grid>
        </Grid>
        
        <Grid container className="footer" item xs={12} sm={12} spacing={0} direction="row" justify="center" alignItems="flex-start">  

          <Grid item xs={6} sm={2}>            
            <a href="/" className="brand-logo">
                <img src={logo} alt="placeholder" width="150" />
            </a>
          </Grid>

          <Grid item xs={6} sm={2}>   
            <Typography variant="h5" component="h5" gutterBottom>
              Home
            </Typography>
            <Link href={'www.google.com'} className={classes.link}>
              About BMJ learning
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Who we are
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Policies
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Partnerships
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Accreditation
            </Link>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Features
            </Typography>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ learning FAQs
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ Portfolio FAQs
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Contact us
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Site map
            </Link>
          </Grid>       

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Pricing
            </Typography>
            <Link href={'www.google.com'} className={classes.link}>
              Register
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Subscribe
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Manage account
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Email alerts
            </Link>
          </Grid>     

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Explore BMJ
            </Typography>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ Best Practice
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ Masterclasses
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ onExamination
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              BMJ Portfolio
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              The BMJ
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              Journals
            </Link>
            <Link href={'www.google.com'} className={classes.link}>
              International Forums
            </Link>
          </Grid>

        </Grid>

      </Grid>
    </div>
    </Container>
    );
}
