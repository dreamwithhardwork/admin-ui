
import SellReqIcon from '../car.svg';
import MakeIcon from '../make.svg';
import BookingIcon from '../bookins.svg';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export function Make() {
    return (
        <MenuItem>
            <ListItemIcon>
                <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={MakeIcon} type="image/svg+xml"> </object>
            </ListItemIcon>
            <Typography variant="inherit" >Make</Typography>
        </MenuItem>
    )
}

export function Cars() {
    return (
        <MenuItem>
            <ListItemIcon>
                <DriveEtaIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Cars</Typography>
        </MenuItem>
    )
}

export function Bikes() {
    return (
        <MenuItem>
            <ListItemIcon>
                <MotorcycleIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Bikes </Typography>
        </MenuItem>
    )
}

export function Users() {
    return (
        <MenuItem>
            <ListItemIcon>
                <PeopleIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Users</Typography>
        </MenuItem>
    )
}

export function RTO() {
    return (
        <MenuItem>
            <ListItemIcon>
                <LocationOnIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap> RTO </Typography>
        </MenuItem>
    )
}

export function SellRequest() {
    return (
        <MenuItem>
            <ListItemIcon>
                <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={SellReqIcon} type="image/svg+xml"> </object>
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Sell Requests</Typography>
        </MenuItem>
    )
}

export function BookingRequest() {
    return (
        <MenuItem>
            <ListItemIcon>
                <object className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" data={BookingIcon} type="image/svg+xml"> </object>
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
                Booking Requests
                   </Typography>
        </MenuItem>
    )
}

export function CarProperties() {
    return (
        <MenuItem>
            <ListItemIcon>
                <SettingsApplicationsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
                Bike Properties
          </Typography>
        </MenuItem>
    )
}

export function BikeProperties() {
    return (
        <MenuItem>
            <ListItemIcon>
                <SettingsApplicationsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
                Car Properties
          </Typography>
        </MenuItem>
    )
}