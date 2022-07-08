/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Join = ({navigation}) => {
  return (
    <View style={{flex: 1, top: 0, padding: 10, backgroundColor: 'white'}}>
        <Image source={require('./image3.png')} style={{height: 230, width: '100%'}}/>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Join Facebook</Text>
          <Text style={{fontSize: 20, textAlign: 'center', 
                color: 'grey'}}>We'll help you create a new account in a few easy steps.</Text>
      </View>
      <View style={{top: 25,}}>
          <TouchableOpacity style={{backgroundColor: '#3777f0', justifyContent: 'center', alignItems: 'center',
                padding: 12, borderRadius: 10}} activeOpacity={0.7}
                onPress={()=>navigation.navigate('SignUp1')}
                >
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Next</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Join

const styles = StyleSheet.create({})