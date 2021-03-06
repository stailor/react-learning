// es6 functional based component
import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import MediaCard from './media-card';

const Progress = (props) => {
    
    if (props.children) {
    return ( 
        <Grid container className="recently" item xs={12} sm={12} spacing={0}>  
            <Grid item xs={12} sm={12}>  
            <Typography variant="h2" component="h2" gutterBottom>
                {props.children}
            </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
            <MediaCard 
            link="https://learning.bmj.com/learning/module-intro/peripheral-intravenous-cannulation.html?moduleId=10033661&searchTerm=%E2%80%9C%20peripheral%20intravenous%E2%80%9D&page=1&locale=en_GB" 
            image="https://learning.bmj.com/classobjects/images/en-gb/chestpain_mhi_default.jpg"
            alt="man with chest pain"
            >Basic practical skills: peripheral intravenous cannulation</MediaCard>
            </Grid>
            <Grid item xs={6} sm={3}>
            <MediaCard 
            link="https://learning.bmj.com/learning/module-intro/stable-angina-management-primary-care.html?moduleId=5003304&searchTerm=%E2%80%9CStable%20angina%E2%80%9D&page=1&locale=en_GB"
            image="https://learning.bmj.com/classobjects/images/en-gb/chestpain_mhi_default.jpg"
            alt="man with chest pain"
            >Stable angina: management in primary care</MediaCard>
            </Grid>
            <Grid item xs={6} sm={3}>
            <MediaCard 
            link="https://learning.bmj.com/learning/module-intro/surgical-site-infection--a-primary-care-focus-on-prevention-and-management-.html?moduleId=10051817&searchTerm=%E2%80%9CSurgical%20site%20infection%E2%80%9D&page=1&locale=en_GB"
            image="https://learning.bmj.com/classobjects/images/en-gb/surgicaltools_mhi_default.jpg"
            alt="surgical tools"
            >Surgical site infection: a primary care focus on prevention and management</MediaCard>
            </Grid>
            <Grid item xs={6} sm={3}>
            <MediaCard 
            link="https://learning.bmj.com/learning/module-intro/nasogastric-tube-insertion.html?moduleId=10033856&searchTerm=%E2%80%9CBasic%20practical%20skills%E2%80%9D&page=1&locale=en_GB"
            image="https://learning.bmj.com/classobjects/images/en-gb/HPswallowing_default.jpg"
            alt="HP swallowing"
            >Basic practical skills: subcutaneous, intramuscular, and intradermal injection techniques in adults</MediaCard>
            </Grid>
      </Grid>
        )
    } else {
        return (
            <Grid container className="recently" item xs={12} sm={12} spacing={0}>  
                <Grid item xs={12} sm={12}>  
                <Typography variant="h2" component="h2" gutterBottom>
                    In progress
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
        )
    }
}

export default Progress;