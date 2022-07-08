/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ruler from './Ruler';

const SignUp1 = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
      <Ruler text='Join Facebook'/>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', }}>What's your name?</Text>
        <Text style={{fontSize: 18, color: 'grey'}}>Enter the name you use in real life.</Text>
      </View>
      
    {/* INPUT VIEW */}
        
          <View style={{flexDirection: 'row', paddingTop: 30}}>
              <View style={{paddingRight: 10}}>
                <Text style={{fontSize: 17}}>First name</Text>
                <TextInput style={{width: 164, height: 40, borderWidth: 1.5, borderColor: 'grey', fontSize: 20, paddingHorizontal: 10 }}/>
              </View> 
              <View>
                <Text style={{fontSize: 17}}>Last name</Text> 
                <TextInput style={{width: 164, height: 40, borderWidth: 1.5, borderColor: 'grey', fontSize: 20, paddingHorizontal: 10}}/>
                </View>
              </View>           
         
          {/* NEXT BUTTON */}
          <View style={{paddingTop: 15}}>
          <TouchableOpacity style={{backgroundColor: '#3777f0', padding: 12, justifyContent: 'center',
              alignItems: 'center', borderRadius: 5,}} activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp2')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Next</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

export default SignUp1

const styles = StyleSheet.create({

})