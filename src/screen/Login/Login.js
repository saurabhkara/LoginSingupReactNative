//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TextInputWithLable from '../../Components/TextInputWithLables';


// create a component
const Login = ({navigation}) => {
    const[state, setState]=useState({
        isLoading:false,
        email:'',
        password:'',
        isSecure:true,

    })

    const {isLoading, email, password, isSecure}= state;
    const upddateState=(data)=>setState(()=>({...state, ...data}))
    return (
        <View style={styles.container}>
           <SafeAreaView  >
               <TextInputWithLable 
                    label="Email"
                    placeholder='Enter Your Email' 
                />
                <TextInputWithLable 
                    label="Password"
                    placeholder='Enter Password' 
                    // isSecure={isSecure}
                    secureTextEntry={isSecure}
                />
           </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:24,

    },
});

//make this component available to the app
export default Login;
