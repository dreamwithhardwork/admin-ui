import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon:{
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(4),
  },
  displayBlock:{
      display: "block"
  },
  displayNone: {
      display: "none"
  }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //default to email
  const [loginType, setLoginType] = React.useState(true);
  const [otpButtonDisplay, setOtpButtonDisplay] = React.useState("none");
  const [passwordTypeLabel,setpasswordTypeLabel] = React.useState("Password*");
  const [passwordTypePaceholeder, setpasswordTypePaceholeder] = React.useState("");
  const [passwordType,setpasswordType] = React.useState("password");
  const [loginTypeSwitch, setloginTypeSwitch] = React.useState(false);
  const [variantType, setvariantType] = React.useState("outlined");
  const [snackBackopen,setsnackBackopen] = React.useState(false);
  const [linearprogress, setlinearprogress] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginType = (event) => {
        setloginTypeSwitch(event.target.checked)
        passwordTypeLabel==="OTP*"?setpasswordTypeLabel("Password*"):setpasswordTypeLabel("OTP*")
        passwordTypePaceholeder===""?setpasswordTypePaceholeder("__ __ __ __"):setpasswordTypePaceholeder("");
        passwordType==="password"?setpasswordType("number"):setpasswordType("password");
        variantType==="outlined"?setvariantType("outlined"):setvariantType("outlined");
  }

  const handleLogin = () =>
  {

  }

  const handleSnClose = () => {
      setsnackBackopen(false)
  }

  const sendOtp =  () => {
      let userId = document.getElementById("email-phone").value;
      let response =  fetch("url");
      setlinearprogress(true);
     response.then(res => res.text())
     .then((data)=>{
         setlinearprogress(false);
         setsnackBackopen(true)
         console.log(data)
     })
     
     console.log(userId)
    
  }


  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
        <Typography variant="h6" className={classes.icon}>
             AUTOMAX
        </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
        </Toolbar>
      </AppBar>
      <div>
      <Snackbar open={snackBackopen} autoHideDuration={3000} onClose={handleSnClose}>
        <Alert onClose={handleSnClose} severity="success">
          OTP sent to your email!
        </Alert>
      </Snackbar>

      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} fullWidth={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login/Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Join us to track your appointments and find out all your recent appointments.
          </DialogContentText>
          <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={loginTypeSwitch} onChange={handleLoginType} />}
              label="Login With OTP"
            />
            <LinearProgress className = {!linearprogress?classes.displayNone:classes.displayBlock} color="secondary" />
          <TextField
            autoFocus
            margin="dense"
            id="email-phone"
            label="Email/Phone*"
            type="email"
            variant="outlined"
            size="normal"
            fullWidth 
            InputProps={{
                endAdornment: <Button color="secondary" onClick={sendOtp} className={!loginTypeSwitch?classes.displayNone:classes.displayBlock}>
                    
                    Get&nbsp;OTP</Button>,
              }}
          /> 
        
       <TextField
            margin="dense"
            id="password"
            label={passwordTypeLabel} // Pasword* or OTP*
            size="normal"
            placeholder={passwordTypePaceholeder}//empty or -- -- -- --
            type={passwordType}//password or otp(text)
            variant={variantType}
            fullWidth
        
     />
          

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}
