import React from 'react';
import {Login, Signup}  from '../index';
export default function(Stack){
    return(
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </>
    )
}
