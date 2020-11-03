import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Make(){
    function test(){
        console.log("Render");
       return( <Redirect to="/"></Redirect> )
    }
    test();
    return(
        <div>
            Make
        </div>
    )
}