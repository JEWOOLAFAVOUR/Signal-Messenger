/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ruler from './Ruler'


const SignUpEmail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
      <Ruler text='Join Facebook'/>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', }}>Enter your email</Text>
        <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>Enter the email where you can be reached. You can hide this from your profile later.</Text>
      </View>
      <View style={{paddingTop: 25}}>
          <Text style={{fontSize: 18}}>Email address</Text>
          <TextInput style={{borderWidth: 1.5, height: 40, width: '100%', borderColor: 'grey', fontSize: 20, paddingHorizontal: 10}}/>
      </View>
      <View style={{paddingTop: 15}}>
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} activeOpacity={0.7}
        onPress={()=>navigation.navigate('JoinBirthday')}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 15, justifyContent: 'center', alignItems: 'center', }} activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp2')}>
          <Text style={{color: '#3777f0', fontSize: 20, fontWeight: 'bold'}}>Sign up with phone number</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpEmail

const styles = StyleSheet.create({
    ruler:{
      height: 1,
      width: '120%',
      backgroundColor: 'grey'
    }
  })