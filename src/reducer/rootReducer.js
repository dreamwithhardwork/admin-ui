import ACTIONS from './actions'

const initialState = {
    login:false,
    userDetails: {}
}

function  initalSetup(){
  console.log(process.env)
  let token = localStorage.getItem("user");
  debugger;
  if(token==="undefined" || token === undefined || token===null)
   {

   }
   else{
       initialState.login = true;
   }
}
initalSetup();


const rootReducer = (state = initialState, action) => {
    debugger;
    let newstate = { ...state };
    if (action.type === ACTIONS.LOGGED_IN) {
        newstate.login = action.value;
    }
    else if (action.type === ACTIONS.USER_DETAILS){
      newstate.userDetails = action.value;
    }
    console.log(newstate)
    return newstate;
}

export default rootReducer;