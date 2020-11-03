
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../css/sidemenu.css';
import { Make, Cars, Bikes, Users, RTO, SellRequest, BookingRequest,CarProperties,BikeProperties } from './sidenavIcons';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MakeComponent from '../components-v1/content/make';
import CustomizedSnackbars from '../components-v1/tostmessage'

const useStyles = makeStyles({
    root: {
        width: 230,
    },
    decoration: {
        textDecoration: "none",
        color:"inherit"
    }
});


export default function TypographyMenu() {
    const classes = useStyles();
    return (
        <Router>
        <Paper className={classes.root, "sidemenu"}>
            <MenuList>
                <Link className={classes.decoration} to = "/make" > <Make /> </Link>
                <Link className={classes.decoration} to = "/cars" >  <Cars /> </Link>
                <Link className={classes.decoration} to = "/bikes" >  <Bikes /> </Link>
                <Link className={classes.decoration} to = "/users" > <Users /> </Link>
                <Link className={classes.decoration} to = "/rto" > <RTO/> </Link>
                <Link className={classes.decoration} to = "/sellrequest" > <SellRequest /> </Link>            
                <BookingRequest />
                <CarProperties></CarProperties>
                <BikeProperties></BikeProperties>
            </MenuList>
        </Paper>
        <Switch>
            <Route path="/" exact> <MakeComponent/> </Route>
            <Route path="/make"> <MakeComponent/> </Route>
            <Route path="/cars"> <MakeComponent/> </Route>
            <Route path="/bikes"> <MakeComponent/> </Route>
            <Route path="/users"> <MakeComponent/> </Route>
            <Route path="/rto"> <MakeComponent/> </Route>
            <Route path="/sellrequest"> <CustomizedSnackbars/> </Route>
            <Route path="/bookingrequest"> <MakeComponent/> </Route>
            <Route path="/bikeproperties"> <MakeComponent/> </Route>
            <Route path="/carproperties"> <MakeComponent/> </Route>
        </Switch>
        </Router>
    );
}
