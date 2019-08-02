// es6 functional based component
import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import MediaCard from './media-card';

const Recently = (props) => {
    
    if (props.children) {
    return ( 
        <Grid container className="why" item xs={12} sm={12} spacing={0}>  
          <Grid item xs={12} sm={12}>  

            <Typography variant="h2" component="h2" gutterBottom>
             {props.children}
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard copy="Used by over 30,000+ doctors, nurses &amp; students worldwide.">Trused</MediaCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard copy="Acheive &amp; register your CPD/CME with over 100+ institutions">Recognised CPD</MediaCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard copy="Learn from our unique case studies, questionnaires, videos anywhere, anytime.">Videos &amp; audio</MediaCard>
          </Grid>
        </Grid>
        )
    } else {
        return (
            <Grid container className="why" item xs={12} sm={12} spacing={0}>  
          <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
              Why BMJ Learning?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard>Trused</MediaCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard>Recognised CPD</MediaCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard>Videos &amp; audio</MediaCard>
          </Grid>
        </Grid>
        )
    }
}

export default Recently;