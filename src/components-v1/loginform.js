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
import {validate} from '../utis/validateusername'

export default function LoginForm(props) {

    //create refs to 
    const [usernameValue,setUserNameValue] = React.useState("");
    const [otpButton,setOtpButton] = React.useState(true);
    const [passwordValue, setPasswordValue] = React.useState("");


    const classes = useStyles();
    const handleClose = () => {
        console.log("This is working ")
    };

    const [loginTypeSwitch, setloginTypeSwitch] = React.useState(false);
    const handleLoginType = (event) => {
        setloginTypeSwitch(event.target.checked);
        setUserNameValue("");
        setPasswordValue("");
        setOtpButton(true);
        passwordTypeLabel === "OTP*" ? setpasswordTypeLabel("Password*") : setpasswordTypeLabel("OTP*")
        passwordTypePaceholeder === "" ? setpasswordTypePaceholeder("__ __ __ __") : setpasswordTypePaceholeder("");
        passwordType === "password" ? setpasswordType("number") : setpasswordType("password");
        //variantType === "outlined" ? setvariantType("outlined") : setvariantType("outlined");
    }


    const [passwordTypeLabel, setpasswordTypeLabel] = React.useState("Password*");
    const [passwordTypePaceholeder, setpasswordTypePaceholeder] = React.useState("");
    const [passwordType, setpasswordType] = React.useState("password");
    const [linearprogress, setlinearprogress] = React.useState(false);

    const sendOtp = () => {
        debugger;
       setlinearprogress(true)
       let res = validate(usernameValue);
       let url;
       if(res==="email"){
          url = "http://localhost:8082/api/v1/otp/send/email/"+usernameValue;
       }
       else if(res === "mobile"){
        url  = "http://localhost:8082/api/v1/otp/send/text/"+usernameValue;
       }
       else{
         setlinearprogress(false)
         return;
       }

       let response = fetch(url);
       response.then((res) => {
           res.text()
       })
       .then((data)=>{
           setlinearprogress(false);
           console.log(data);
       })
       .catch((err)=>{
           setlinearprogress(false);
           console.log(err);
       })
        
    }

    const login = () => {
        let loginPayload = {
            loginType: "",
            otp: "",
            username: ""
          }
        if(loginTypeSwitch){
             loginPayload.loginType="OTP";
             loginPayload.otp=passwordValue;
             loginPayload.username=usernameValue;
             console.log(JSON.stringify(loginPayload))
             const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginPayload)
            };
            let  url = "http://localhost:8082/api/v1/user/login";
           let response =   fetch(url,requestOptions)
           response.then((res) => res.json())
           .then((data) => {
               console.log(data);
           })
           .catch((err)=>{
               console.log(err)
           })
        }
        


    }


    const handleUsernameChange = (event) => {
        let value = event.target.value;
        if(loginTypeSwitch && value.length > 3){
            setOtpButton(false);
        }
        setUserNameValue(event.target.value)
    }

    const passwordChange = (event) => {
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
                        endAdornment: <Button disabled={otpButton} id="otp" color="secondary" onClick={sendOtp} className={!loginTypeSwitch ? classes.displayNone : classes.displayBlock}>Get&nbsp;OTP</Button>
                    }} />

                <TextField value={passwordValue} onChange={passwordChange} margin="dense" id="password" label={passwordTypeLabel}  placeholder={passwordTypePaceholeder} type={passwordType} variant="outlined" fullWidth />
            </DialogContent>


            <DialogActions>
                {props.children}
                <Button onClick={login} color="primary">Login</Button>
            </DialogActions>

        </Dialog>
    )

}