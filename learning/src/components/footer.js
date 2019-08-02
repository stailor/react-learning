// es6 functional based component
import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import logo from '../images/logo.png';


const Footer = () => {
    
    return ( 
        
      <Grid container className="footer" item xs={12} sm={12} spacing={0} direction="row" justify="center" alignItems="flex-start">  

      <Grid item xs={12} sm={2}>            
        <a href="/" className="brand-logo">
            <img src={logo} alt="placeholder" width="150" />
        </a>
      </Grid>

      <Grid item xs={6} sm={2}>   
        <Typography variant="h5" component="h5" gutterBottom>
          Home
        </Typography>
        <Link href={'www.google.com'}>
          About BMJ learning
        </Link>
        <Link href={'www.google.com'}>
          Who we are
        </Link>
        <Link href={'www.google.com'}>
          Policies
        </Link>
        <Link href={'www.google.com'}>
          Partnerships
        </Link>
        <Link href={'www.google.com'}>
          Accreditation
        </Link>
      </Grid>

      <Grid item xs={6} sm={2}>
        <Typography variant="h5" component="h5" gutterBottom>
          Features
        </Typography>
        <Link href={'www.google.com'}>
          BMJ learning FAQs
        </Link>
        <Link href={'www.google.com'}>
          BMJ Portfolio FAQs
        </Link>
        <Link href={'www.google.com'}>
          Contact us
        </Link>
        <Link href={'www.google.com'}>
          Site map
        </Link>
      </Grid>       

      <Grid item xs={6} sm={2}>
        <Typography variant="h5" component="h5" gutterBottom>
          Pricing
        </Typography>
        <Link href={'www.google.com'}>
          Register
        </Link>
        <Link href={'www.google.com'}>
          Subscribe
        </Link>
        <Link href={'www.google.com'}>
          Manage account
        </Link>
        <Link href={'www.google.com'}>
          Email alerts
        </Link>
      </Grid>     

      <Grid item xs={6} sm={2}>
        <Typography variant="h5" component="h5" gutterBottom>
          Explore BMJ
        </Typography>
        <Link href={'www.google.com'}>
          BMJ
        </Link>
        <Link href={'www.google.com'}>
          BMJ Best Practice
        </Link>
        <Link href={'www.google.com'}>
          BMJ Masterclasses
        </Link>
        <Link href={'www.google.com'}>
          BMJ onExamination
        </Link>
        <Link href={'www.google.com'}>
          BMJ Portfolio
        </Link>
        <Link href={'www.google.com'}>
          The BMJ
        </Link>
        <Link href={'www.google.com'}>
          Journals
        </Link>
        <Link href={'www.google.com'}>
          International Forums
        </Link>
      </Grid>

    </Grid>
        )
    }

export default Footer;