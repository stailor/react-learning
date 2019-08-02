import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0),
    background: '#424b5a',
    color: 'white',
    height: 30,
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      
      <Button variant="contained" className={classes.button}>
        Search
      </Button>
    </div>
  );
}
