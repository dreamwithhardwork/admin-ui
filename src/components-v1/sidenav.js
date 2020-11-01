import React, { useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../css/sidemenu.css';
import { Make, Cars, Bikes, Users, RTO, SellRequest, BookingRequest,CarProperties,BikeProperties } from './sidenavIcons'

const useStyles = makeStyles({
    root: {
        width: 230,
    },
});


export default function TypographyMenu() {
    const classes = useStyles();
    const [enabled, setEnabled] = useState(true);
    return (
        <Paper className={classes.root, "sidemenu"}>
            <MenuList>
                <Make />
                <Cars />
                <Bikes />
                <Users />
                <RTO></RTO>
                <SellRequest />
                <BookingRequest />
                <CarProperties></CarProperties>
                <BikeProperties></BikeProperties>
            </MenuList>
        </Paper>
    );
}
