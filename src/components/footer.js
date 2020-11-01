import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon:{
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(4),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar style={{display:"flex",justifyContent:"center"}}>
            <a style={{color:"white"}} href="https://automax.com" >automax.com &nbsp;</a>
            <span>&copy; 2020 automax</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
