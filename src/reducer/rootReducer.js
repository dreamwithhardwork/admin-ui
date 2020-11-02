const initialState = {
    login:false
}

const rootReducer = (state = initialState, action) => {
    debugger;
    let newstate = { ...state };
    if (action.type === "LOGGED_IN") {
        newstate.login = action.value;
    }
    console.log(newstate)
    return newstate;
}

export default rootReducer;