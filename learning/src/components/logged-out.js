import React from 'react';

import { Grid, Container } from '@material-ui/core';

import Nav from './navigation';
import Courses from './courses';
import Specialty from './specialty';
import Recently from './recently';
import Why from './why';
import CaseStudies from './case-studies';
import Footer from './footer';

export default function FullWidthGrid() {

  return (
    <Container maxWidth="lg">
      <Grid container>

        <Nav></Nav>        
        <Courses>Courses to help you learn at every stage of your career</Courses>
        <Specialty>Browse by specialty</Specialty>
        <Recently>Recently Updated</Recently>
        <Why>Why BMJ Learning?</Why>
        <CaseStudies>Want to learn by answering case studies?</CaseStudies>
        <Footer></Footer>

      </Grid>
    </Container>
    );
}
