import { makeStyles } from '@material-ui/core/styles';
import {loginPayload} from '../payloads/payloads';
import {validate} from '../utis/validateusername'

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





  export const login = (otpLogin,usernameValue,passwordValue) => {
            if(otpLogin)
             return otpLogin(usernameValue,passwordValue);
  }


  export const sendOtp = (usernameValue,setlinearprogress) => {
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




  function otpLogin(usernameValue,passwordValue) {
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
            return  fetch(url,requestOptions)
  }