// es6 functional based component
import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import MediaCard from './media-card';

const CardSpecialty = (props) => {
    
    if (props.children) {
    return ( 
        <Grid container className="specialty" item xs={12} sm={12} spacing={0}>  

          <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
              {props.children}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Acute Internal Medicine</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Cardiology</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Dermatology</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Gastroenterology</MediaCard>
          </Grid>        
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">General practice</MediaCard>
          </Grid>        
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Infectious Diseases</MediaCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Neurology</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Obstetrics &amp; Gynaecology</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Oncology</MediaCard>
          </Grid>          
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Opthalmology</MediaCard>
          </Grid>        
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Paediatrics</MediaCard>
          </Grid>        
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <MediaCard browse="Browse all">Psychiatry</MediaCard>
          </Grid>

        </Grid>
        )
    } else {
        return (
            <Grid container className="specialty" item xs={12} sm={12} spacing={0}>  

            <Grid item xs={12} sm={12}>  
              <Typography variant="h2" component="h2" gutterBottom>
                Browse by specialty
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>        
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>        
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>            
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>          
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>        
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>        
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <MediaCard/>
            </Grid>
  
          </Grid>
        )
    }
}

export default CardSpecialty;