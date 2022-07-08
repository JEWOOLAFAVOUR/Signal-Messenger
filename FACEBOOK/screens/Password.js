/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ruler from './Ruler';

const Password = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
          <Ruler text='Join Facebook'/>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
            <Text style={{fontSize: 28, fontWeight: 'bold', }}>Create a passwords</Text>
            <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>Create a password with at least 6 characters.
             It should be something others couldn't guess.</Text>
          </View>
          <View style={{paddingTop: 25}}>
              <Text style={{fontSize: 18}}>New password</Text>
              <TextInput style={{borderWidth: 1.5, height: 40, width: '100%', borderColor: 'grey', fontSize: 20, paddingHorizontal: 10}}
                keyboardType='numeric'/>
          </View>
          <View style={{paddingTop: 15}}>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} activeOpacity={0.7}
            onPress={()=>navigation.navigate('FinishSignUp')}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Next</Text>
          </TouchableOpacity>
          </View>
        </View>
      )
}

export default Password

const styles = StyleSheet.create({})