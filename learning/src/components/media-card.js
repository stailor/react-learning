import React from 'react';
import { Link, makeStyles, Card, CardActionArea, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import HomeIcon from './features/placeholder-image';
import placeholder from '../images/sample-1.jpg';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:16,
  },
  media: {
    height: 140,
  },
  title: {
    color: '#424b5a',
    fontSize: '1.3rem',
  },
  link: {
    color:'#006ebd',
    textAlign: 'center',
    width: '100%'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  if (props.browse) {
    return (
      
      <Card className={classes.card}>
        <Link href={props.link}>
          <CardActionArea>
            <HomeIcon
              className={classes.media}
              image={props.image}
              title="Placeholder"
            />          
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" className={classes.title}>
                {props.children}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.copy}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small"  className={classes.link}>
          {props.browse}
          </Button>
        </CardActions>
      </Card>
      )
  } if (props.children) {
    return (
      
      <Card className={classes.card}>
        <Link href={props.link}>
          <CardActionArea>
            <HomeIcon
              className={classes.media}
              image={props.image}
              title="Placeholder"
            />          
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" className={classes.title}>
                {props.children}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.copy}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      )
  } 
else {
    return (
      <Card className={classes.card}>
      <Link href="/">
      <CardActionArea>
        <HomeIcon
          className={classes.media}
          image={placeholder}
          title="Placeholder"
          src={props.link}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {props.children}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            copy here
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
        Browse all
        </Button>
      </CardActions>
    </Card>
    )
}
}
