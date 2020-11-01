import { useStyles } from '../utis/loginform'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



export default function LoginForm(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const [loginTypeSwitch, setloginTypeSwitch] = React.useState(false);
    const handleLoginType = (event) => {
        setloginTypeSwitch(event.target.checked)
        passwordTypeLabel === "OTP*" ? setpasswordTypeLabel("Password*") : setpasswordTypeLabel("OTP*")
        passwordTypePaceholeder === "" ? setpasswordTypePaceholeder("__ __ __ __") : setpasswordTypePaceholeder("");
        passwordType === "password" ? setpasswordType("number") : setpasswordType("password");
        //variantType === "outlined" ? setvariantType("outlined") : setvariantType("outlined");
    }


    const [passwordTypeLabel, setpasswordTypeLabel] = React.useState("Password*");
    const [passwordTypePaceholeder, setpasswordTypePaceholeder] = React.useState("");
    const [passwordType, setpasswordType] = React.useState("password");
    const [snackBackopen, setsnackBackopen] = React.useState(false);
    const [linearprogress, setlinearprogress] = React.useState(false);

    const sendOtp = () => {

    }

    const login = () => {

    }

    const handleSnClose = () => {
        
    }


    return (
        <Dialog open={props.open} onClose={handleClose} maxWidth={"xs"} fullWidth={true} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">Login/Signup</DialogTitle>

            <DialogContent>
                <DialogContentText> Join us to track your appointments and find out all your recent appointments.</DialogContentText>
                <FormControlLabel
                    control={<Switch checked={loginTypeSwitch} onChange={handleLoginType} />} label="Login With OTP" />
                <LinearProgress className={!linearprogress ? classes.displayNone : classes.displayBlock} color="secondary" />
                <TextField autoFocus margin="dense" id="email-phone" label="Email/Phone*" type="email" variant="outlined" size="normal" fullWidth
                    InputProps={{
                        endAdornment: <Button color="secondary" onClick={sendOtp} className={!loginTypeSwitch ? classes.displayNone : classes.displayBlock}>Get&nbsp;OTP</Button>
                    }} />

                <TextField margin="dense" id="password" label={passwordTypeLabel} size="normal" placeholder={passwordTypePaceholeder} type={passwordType} variant="outlined" fullWidth />
            </DialogContent>


            <DialogActions>
                {props.children}
                <Button onClick={login} color="primary">Login</Button>

            </DialogActions>

            <Snackbar open={props.display} autoHideDuration={3000} onClose={handleSnClose}>
                <Alert onClose={handleSnClose} severity="success">OTP sent to your email!</Alert>
            </Snackbar>

        </Dialog>
    )

}



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}