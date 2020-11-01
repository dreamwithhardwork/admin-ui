import React, {useState} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SellReqIcon from '../car.svg';
import MakeIcon from '../make.svg';
import BookingIcon from '../bookins.svg';
import '../css/sidemenu.css';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});



export default function TypographyMenu() {
  const classes = useStyles();
  const [enabled, setEnabled] = useState(true);
  return (
    <Paper className={classes.root,"sidemenu"}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
          <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={MakeIcon} type="image/svg+xml"> </object>
          </ListItemIcon>
        <Typography variant="inherit" >Make</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
              <DriveEtaIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Cars
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
              <MotorcycleIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Bikes
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Users</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
              <LocationOnIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              RTO
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={SellReqIcon} type="image/svg+xml"> </object>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Sell Requests
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={BookingIcon} type="image/svg+xml"> </object>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Booking Requests
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
              <SettingsApplicationsIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Bike Properties
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
              <SettingsApplicationsIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
              Car Properties
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
