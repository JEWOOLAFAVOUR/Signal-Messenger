/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ruler from './Ruler';

const Gender = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
          <Ruler text='Join Facebook'/>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
            <Text style={{fontSize: 28, fontWeight: 'bold', }}>What's your gender?</Text>
            <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>You can change who sees your gender on your profile later.</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Password')}>
                <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Password')}>
                <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Password')}>
                <Text>Custom</Text>
                <View>
                    <Text>Select Custom to choose another gender, or if you'd rather not say.</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
      )
}

export default Gender

const styles = StyleSheet.create({})