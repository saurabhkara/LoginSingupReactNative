import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';


const Stack = createNativeStackNavigator();

 export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
         {true ? AuthStack(Stack)
            :MainStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }