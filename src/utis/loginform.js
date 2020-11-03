import { makeStyles } from '@material-ui/core/styles';
import { loginPayload } from '../payloads/payloads';
import { validate } from '../utis/validateusername';
import { LOGIN_TYPE } from '../payloads/constants';
import {OTP,LOGIN_SIGNUP} from '../properties/serviceurls'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(4),
  },
  displayBlock: {
    display: "block"
  },
  displayNone: {
    display: "none"
  }
}));





export const login = (isotpLogin, usernameValue, passwordValue,setBackDrop) => {
  if (isotpLogin)
    return otpLogin(usernameValue, passwordValue,setBackDrop);
  else
    return passwordLogin(usernameValue, passwordValue,setBackDrop);
}


export const sendOtp = (usernameValue, setlinearprogress, setPasswordFieldDisplay, setToastOpen, setToastMessage, setToastMessageSeverity) => {
  setlinearprogress(true);
  console.log(process.env)
  let res = validate(usernameValue);
  let url;
  if (res === LOGIN_TYPE.EMAIL) {
    url = OTP.EMAIL + usernameValue;
  }
  else if (res === LOGIN_TYPE.MOBILE) {
    url = OTP.MOBILE + usernameValue;
  }
  else {
    setlinearprogress(false);
    setToastOpen(true)
    setToastMessageSeverity("error");
    setToastMessage("Invalid mobile number / email !!")
    return;
  }

  let response = fetch(url);
  response.then((res) => {
    res.text()
  })
    .then((data) => {
      setlinearprogress(false);
      setPasswordFieldDisplay({ display: "block" })
      setToastMessageSeverity("success");
      setToastMessage("otp sent to your mobile/email !!")
      console.log(data);
    })
    .catch((err) => {
      setlinearprogress(false);
      setToastOpen(true)
      setToastMessageSeverity("error");
      setToastMessage("failed to send otp !!")
    })
}




 function otpLogin(usernameValue, passwordValue) {
  loginPayload.loginType = "OTP";
  loginPayload.otp = passwordValue;
  loginPayload.username = usernameValue;
  console.log(JSON.stringify(loginPayload))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload)
  };
  let url = LOGIN_SIGNUP.LOGIN;
  return fetch(url, requestOptions)
}


 function passwordLogin(usernameValue, passwordValue,setBackDrop) {
  loginPayload.loginType = "PASSWORD";
  loginPayload.password = passwordValue;
  loginPayload.username = usernameValue;
  console.log(JSON.stringify(loginPayload))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload)
  };
  let url = LOGIN_SIGNUP.LOGIN;
  console.log(url)
  let response = fetch(url, requestOptions);
  response.then((res) => res.json())
           .then((data) => {
               //let token = JSON.parse(data);
               //localStorage.setItem("user",token.jwt);
               setBackDrop(false);
           })
           .catch((err)=>{
               console.log(err);
               setBackDrop(true);
           })
}