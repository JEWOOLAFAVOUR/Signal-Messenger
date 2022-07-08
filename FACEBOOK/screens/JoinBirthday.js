/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Ruler from './Ruler';


const JoinBirthday = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
      <Ruler text='Join Facebook'/>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', }}>What's your birthday?</Text>
        <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>Choose your date of birth. You can always make this private later.</Text>
      </View>
      <View style={{paddingTop: 25}}>
          <Text style={{fontSize: 18}}>Birthday</Text>
          <TextInput style={{borderWidth: 1.5, height: 40, width: '100%', borderColor: 'grey', fontSize: 20, paddingHorizontal: 10}}
            keyboardType='numeric'/>
      </View>
      <View style={{paddingTop: 15}}>
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} activeOpacity={0.7}
        onPress={()=>navigation.navigate('Gender')}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default JoinBirthday

const styles = StyleSheet.create({})