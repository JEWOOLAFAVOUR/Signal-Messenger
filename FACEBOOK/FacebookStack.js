/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login'
import Join from './screens/Join';
import SignUp1 from './screens/SignUp1';
import SignUp2 from './screens/SignUp2'
import SignUpEmail from './screens/SignUpEmail';
import JoinBirthday from './screens/JoinBirthday'
import Gender from './screens/Gender';
import Password from './screens/Password';
import FinishSignUp from './screens/FinishSign';
import SaveLogin from './screens/SaveLogin';
import ProfilePicture from './screens/ProfilePicture';
import FindFriends1 from './screens/FindFriends1';

const Stack = createStackNavigator();

const FacebookStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Facebook' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Join' component={Join} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp1' component={SignUp1} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp2' component={SignUp2} options={{headerShown: false}}/>
        <Stack.Screen name='SignUpEmail' component={SignUpEmail} options={{headerShown: false}}/>
        <Stack.Screen name='JoinBirthday' component={JoinBirthday} options={{headerShown: false}}/>
        <Stack.Screen name='Gender' component={Gender} options={{headerShown: false}}/>
        <Stack.Screen name='Password' component={Password} options={{headerShown: false}}/>
        <Stack.Screen name='FinishSignUp' component={FinishSignUp} options={{headerShown: false}}/>
        <Stack.Screen name='SaveLogin' component={SaveLogin} options={{headerShown: false}}/>
        <Stack.Screen name='ProfilePicture' component={ProfilePicture}/>
        <Stack.Screen name='FindFriends1' component={FindFriends1} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default FacebookStack;

