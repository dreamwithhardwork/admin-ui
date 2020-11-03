
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from '../utis/header';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {connect} from 'react-redux';
import SimpleBackdrop from '../components-v1/backdrop';
import { Link,useHistory } from 'react-router-dom';
import MakeIcon from '../passport.png';




function UserProfile(props) {

    const classes = useStyles()
    const history = useHistory()
    //
    const defaultProps = {
        color: 'secondary',
        children: <NotificationsActiveIcon />,
    };
    const [popen, setpOpen] = React.useState(false)
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setpOpen((prevOpen) => !prevOpen);
    };

    const handlepClose = (event) => {
        console.log(props)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setpOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setpOpen(false);
        }
    }
    const prevOpen = React.useRef(popen);
    React.useEffect(() => {
        if (prevOpen.current === true && popen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = popen;
    }, [popen]);

    function handleLogout(event){
      localStorage.setItem("user",undefined);
      handlepClose(event);
      props.loggedin();
    }
    //

    return (
        <React.Fragment>
            <Badge badgeContent={1} {...defaultProps} className={classes.avatar} />
            <Avatar ref={anchorRef}
                aria-controls={popen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.avatar} src={"/broken-image.jpg"}></Avatar>
            <Popper open={popen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handlepClose}>
                                <MenuList autoFocusItem={popen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <div style={{display:"flex",justifyContent:"center"}}>
                                    <Avatar src={props.userDetails.profilePic}></Avatar>
                                    </div>
                                     <MenuItem style={{textAlign:"center"}} onClick={handlepClose}>{props.userDetails.name.charAt(0).toUpperCase()+props.userDetails.name.slice(1)}</MenuItem>
                                    <MenuItem onClick={handlepClose}>My account</MenuItem>
                                    <MenuItem onClick={(event) => {handleLogout(event)}}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    )
}

const mapDispatcherToProps = dispatch => {
    const res = {type:"LOGGED_IN",value:false};
    return {
        loggedin : () => dispatch(res)
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(UserProfile)