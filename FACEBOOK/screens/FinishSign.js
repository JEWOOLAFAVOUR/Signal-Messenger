/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Ruler from './Ruler';


const FinishSignUp = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
      <Ruler text='Join Facebook'/>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', }}>Finish signing up</Text>
        <Text style={styles.text}>People who use our service may have uploaded your contact information to Facebook. <Text style={styles.bold}>Learn more</Text></Text>
        <Text style={[styles.text, {top: -5}]}>By tapping Sign Up, you agree to our <Text style={styles.bold}>Terms, Data Policy</Text> and <Text style={styles.bold}>Cookies Policy.</Text> 
        You may receive SMS notification from us and can opt out any time.</Text>
      </View>
      <View style={{paddingTop: 15}}>
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} activeOpacity={0.7}
        onPress={()=>navigation.navigate('SaveLogin')}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default FinishSignUp

const styles = StyleSheet.create({
    text:{
        fontSize: 20, 
        color: 'grey', 
        paddingTop: 7, 
        textAlign: 'center',
    },
    bold:{
      fontWeight: 'bold',
      color: '#3777f0',
  },
});