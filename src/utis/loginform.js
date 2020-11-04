import { makeStyles } from '@material-ui/core/styles';
import { loginPayload,addAuthHeader } from '../payloads/payloads';
import { validate } from '../utis/validateusername';
import { LOGIN_TYPE } from '../payloads/constants';
import {OTP,LOGIN_SIGNUP,USERDETAILS_URL} from '../properties/serviceurls';

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





export const login = (isotpLogin, usernameValue, passwordValue,setBackDrop,setToastOpen,setToastMessageSeverity,setToastMessage,loggedIn,closed,getUser) => {
  if (isotpLogin){
    loginPayload.loginType="OTP"
    loginPayload.otp = passwordValue;
  }
    
  else{
    loginPayload.loginType="PASSWORD"
    loginPayload.password=passwordValue;
  }
   let userName = usernameValue.replace(/\s/g,"");
   userName = userName.toLowerCase();
  return userLogin(userName, passwordValue,setBackDrop,setToastOpen,setToastMessageSeverity,setToastMessage,loggedIn,closed,getUser);
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
      setPasswordFieldDisplay({ display: "block" });
      setToastMessageSeverity("success");
      setToastMessage("otp sent to your mobile/email !!");
      setToastOpen(true);
    })
    .catch((err) => {
      setlinearprogress(false);
      setToastOpen(true)
      setToastMessageSeverity("error");
      setToastMessage("failed to send otp !!")
    })
}

 async function getUserDetails(payload){
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  requestOptions.headers.Authorization = "Bearer "+localStorage.getItem("user");
  console.log(requestOptions)
   if(payload.loginType == "OTP"){
    return await fetch(USERDETAILS_URL.MOBILE+payload.username,requestOptions);
   }
   else{
    return await fetch(USERDETAILS_URL.EMAIL+payload.username,requestOptions);
   }
}


 async function logInError(message){



 }

 function userLogin(usernameValue, passwordValue,setBackDrop,setToastOpen,setToastMessageSeverity,setToastMessage,loggedIn,close,getUser) {
  loginPayload.username = usernameValue;
  console.log(JSON.stringify(loginPayload))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload)
  };
  let url = LOGIN_SIGNUP.LOGIN;
  let response = fetch(url, requestOptions);
  response.then((res) => {if(res.status===200) return res.json(); else throw res.json() })
           .then(async (data) => {
               console.log(data);
               //let token = JSON.parse(data); 
               console.log(data);
                localStorage.setItem("user",data.jwt);
                let userDetails = await getUserDetails(loginPayload);
                 userDetails= await userDetails.json();
                getUser(userDetails)
                setBackDrop(false);
                loggedIn();
                close();

           })
           .catch((err)=>{
               console.log(err);
               setBackDrop(false);
               setToastOpen(true)
               setToastMessageSeverity("error");
               setToastMessage("Invalid login credntials !!")
           }) 
}