// es6 functional based component
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    
    return ( 
        <Grid container className="footer" item xs={12} sm={12} spacing={6}>  

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
                Home
            </Typography>            
            <Typography>
                <Link href={'#'}>
                    About BMJ learning
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Who we are
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Policies
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Partnerships
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Accreditation
                </Link>
            </Typography>
            
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Features
            </Typography>
            <Typography>
                <Link href={'#'}>
              BMJ learning FAQs
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
              BMJ Portfolio FAQs
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
              Contact us
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
              Site map
                </Link>
            </Typography>
          </Grid>  

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Pricing
            </Typography>

            <Typography>
                <Link href={'#'}>
                    Register
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Subscribe
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Manage account
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    Email alerts
                </Link>
            </Typography>
          </Grid>   

          <Grid item xs={6} sm={2}>
            <Typography variant="h5" component="h5" gutterBottom>
              Explore BMJ
            </Typography>
            <Typography>
                <Link href={'#'}>
                  BMJ                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                  BMJ Best Practice                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    BMJ Masterclasses                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                    BMJ onExamination
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
              BMJ Portfolio                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                  The BMJ                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                  Journals                    
                </Link>
            </Typography>
            <Typography>
                <Link href={'#'}>
                  International Forums                    
                </Link>
            </Typography>
          </Grid>

        </Grid>
        )
    }

export default Footer;