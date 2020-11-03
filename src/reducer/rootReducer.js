import ACTIONS from './actions'

const initialState = {
    login:false
}

async function  initalSetup(){
  let token = localStorage.getItem("user");
  if(token===undefined || token===null)
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
    console.log(newstate)
    return newstate;
}

export default rootReducer;