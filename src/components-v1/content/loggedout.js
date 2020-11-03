import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Logout(){
    function test(){
        console.log("logout");
       return( <Redirect to="/"></Redirect> )
    }
    test();
    return(
        <div>
            Make LoggedOut
        </div>
    )
}

