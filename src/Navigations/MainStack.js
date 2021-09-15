import React from 'react';
import {Home, Profile}  from '../index';
export default function(Stack){
    return(
        <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </>
    )
}
