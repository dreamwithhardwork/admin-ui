import header from "../components-v1/header";

export const loginPayload = {
    loginType: "",
    otp: "",
    username: "",
    password: ""
  };


export const addAuthHeader = (headers) => {
return headers.Authentication = "Bearer "+localStorage.getItem("user");
}