import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));


export default function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar style={{ display: "flex", justifyContent: "center" }}>
                    <a style={{ color: "white" }} href="https://automax.com" >automax.com &nbsp;</a>
                    <span>&copy; 2020 automax</span>
                </Toolbar>
            </AppBar>
        </div>
    )
}