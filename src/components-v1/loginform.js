import { useStyles,login,sendOtp } from '../utis/loginform'
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
import {connect} from 'react-redux';
import CustomizedSnackbars from '../components-v1/tostmessage';
import BackDrop from '../components-v1/backdrop';

function LoginForm(props) {

    //create refs to 
    const [usernameValue,setUserNameValue] = React.useState("");
    const [otpButton,setOtpButton] = React.useState(true);
    const [passwordValue, setPasswordValue] = React.useState("");
    const [loginButton,setLoginButton] = React.useState(true);
    const [passwordFieldDisplay,setPasswordFieldDisplay] = React.useState({display:"block"});
    const [toastOpen,setToastOpen] = React.useState(false);
    const [toastMessageSeverity, setToastMessageSeverity] = React.useState("success");
    const [toastMessage, setToastMessage] = React.useState("sucess");
    const [backdrop, setBackDrop] = React.useState(false);
    const handleBackdropClose = () => {
      setBackDrop(false);
    };
    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setToastOpen(false);
      };

    const classes = useStyles();
    const handleClose = () => {
        console.log("This is working ")
    };

    const reset =() => {
        setUserNameValue("");
        setPasswordValue("");
        setOtpButton(true);
        setLoginButton(true);
    }

    const [loginTypeSwitch, setloginTypeSwitch] = React.useState(false);
    const handleLoginType = (event) => {
        let otpType = event.target.checked;
        setloginTypeSwitch(otpType);
        reset();
        !otpType ? setpasswordTypeLabel("Password*") : setpasswordTypeLabel("OTP*")
        otpType ? setpasswordTypePaceholeder("__ __ __ __") : setpasswordTypePaceholeder("");
        otpType ? setpasswordType("number") : setpasswordType("password");
        otpType ? setPasswordFieldDisplay({display:"none"}) : setPasswordFieldDisplay({display:"block"})
        //variantType === "outlined" ? setvariantType("outlined") : setvariantType("outlined");
    }


    const [passwordTypeLabel, setpasswordTypeLabel] = React.useState("Password*");
    const [passwordTypePaceholeder, setpasswordTypePaceholeder] = React.useState("");
    const [passwordType, setpasswordType] = React.useState("password");
    const [linearprogress, setlinearprogress] = React.useState(false);

    const handleOtp = () => {
       sendOtp(usernameValue,setlinearprogress,setPasswordFieldDisplay,setToastOpen,setToastMessage,setToastMessageSeverity);
       //props.loggedin();
    }

    const handleLogin = () => {
        setBackDrop(true);
        login(loginTypeSwitch,usernameValue,passwordValue,setBackDrop,setToastOpen,setToastMessageSeverity,
            setToastMessage,props.loggedin,props.close);
            reset();
    }


    const handleUsernameChange = (event) => {
        let value = event.target.value;
        if(loginTypeSwitch && value.length > 3){
            setOtpButton(false);
        }
        setUserNameValue(event.target.value)
    }

    const passwordChange = (event) => {
        let value = event.target.value;
        if(value.length >3)
        {
            setLoginButton(false)
        }
        setPasswordValue(event.target.value)
    }


    return (
        <Dialog open={props.open} onClose={handleClose} maxWidth={"xs"} fullWidth={true} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login/Signup</DialogTitle>

            <DialogContent>
                <DialogContentText> Join us to track your appointments and find out all your recent appointments.</DialogContentText>
                <FormControlLabel
                    control={<Switch checked={loginTypeSwitch} onChange={handleLoginType} />} label="Login With OTP" />
                <LinearProgress className={!linearprogress ? classes.displayNone : classes.displayBlock} color="secondary" />
                <TextField value={usernameValue} onChange={handleUsernameChange} autoFocus margin="dense" id="email-phone" label="Email/Phone*" type="email" variant="outlined" fullWidth
                    InputProps={{
                        endAdornment: <Button disabled={otpButton} id="otp" color="secondary" onClick={handleOtp} className={!loginTypeSwitch ? classes.displayNone : classes.displayBlock}>Get&nbsp;OTP</Button>
                    }} />

                <TextField  style={{...passwordFieldDisplay}}  value={passwordValue} onChange={passwordChange} margin="dense" id="password" label={passwordTypeLabel}  placeholder={passwordTypePaceholeder} type={passwordType} variant="outlined" fullWidth />
            </DialogContent>


            <DialogActions>
                <Button onClick={() => {props.close();reset();}} color="primary">Cancel</Button>
                <Button disabled={loginButton} onClick={handleLogin} color="primary">Login</Button>
            </DialogActions>


            <BackDrop open ={backdrop} close ={handleBackdropClose}></BackDrop>
            <CustomizedSnackbars  open={toastOpen} close={handleToastClose} severity={toastMessageSeverity} message={toastMessage} />
            
        </Dialog>
    )

}

const mapDispatcherToProps = dispatch => {
    const res = {type:"LOGGED_IN",value:true};
    return {
        loggedin : () => dispatch(res)
    }
}

export default connect(null,mapDispatcherToProps)(LoginForm)
