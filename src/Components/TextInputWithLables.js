import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextInputWithLable = ({
    label,
    value,
    placeholder,
    onChangeText,
    textStyle,
    isSecure, 
    ...props
}) => {
    return (
        <View style={{marginBottom:16}}>
            <Text style={{fontSize:16,marginBottom:8,fontWeight:'bold', paddingLeft:5}}>{label}</Text>
            <TextInput 
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                placeholderTextColor="gray"
                secureTextEntry={isSecure}
                {...props}
            />
        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle:{
        height:48,
        borderWidth:1,
        borderColor:'gray',
        color:'black',
        padding:16,
        borderRadius:10,
    }
});

//make this component available to the app
export default TextInputWithLable;
