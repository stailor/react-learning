import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
    color: '#424b5a'
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M24 24H0V0h24v24z"/><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>
    </SvgIcon>
  );
}

export default function SvgIcons(props) {
  const classes = useStyles();

  if (props.image) {
  return (
    <div className={classes.root}>
      <img src={props.image} style={{fontSize:150}} alt={props.alt} />      
    </div>
  )
} else {
    return (
      <div className={classes.root}>
        <HomeIcon className={classes.icon}  style={{ fontSize: 150 }} />      
      </div>
      )
  }
}
