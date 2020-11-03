
export const OTP ={
    MOBILE: process.env.REACT_APP_USER_OTP+"/api/v1/otp/send/text/",
    EMAIL: process.env.REACT_APP_USER_OTP+"/api/v1/otp/send/email/"
}

export const LOGIN_SIGNUP = {
      LOGIN: process.env.REACT_APP_USER_OTP+"/api/v1/user/login",
      SIGNUP: process.env.REACT_APP_USER_OTP+"/api/v1/user/signup"
}

export const USERDETAILS_URL = {
    MOBILE: process.env.REACT_APP_USER_DETAILS+"/api/v1/admin/registered/users/mobile/",
    EMAIL: process.env.REACT_APP_USER_DETAILS+"/api/v1/admin/registered/users/email/"
}
