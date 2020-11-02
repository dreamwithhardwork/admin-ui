import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {useStyles} from '../utis/header';
import LoginForm from './loginform';
import {connect} from 'react-redux';




 function Header(props) {
    const classes = useStyles()
    const [open,setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
      }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.icon}>AUTOMAX</Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}></Typography>
                    
                    <Button color="inherit" className={props.login?classes.displayNone:classes.displayBlock} onClick={handleClickOpen}>Login</Button>
                </Toolbar>
            </AppBar>
       
            <LoginForm open = {open}>
                 <Button onClick={handleClose}  color="primary">Cancel</Button>
            </LoginForm>
        </div>
    )
}

const mapStateToprops = (state)=>{
    return {
        login:state.login
    }
}



export default connect(mapStateToprops,null)(Header)



