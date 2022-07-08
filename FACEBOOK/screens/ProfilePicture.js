/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ProfilePicture = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Help friends find you by adding a profile picture</Text>
      <View style={styles.pic}>
        <Text style={{fontWeight: 'bold', fontSize: 50, color:'white'}}>FB</Text>
      </View>
      <View style={{paddingVertical: 35}}>
      <TouchableOpacity style={styles.upload} activeOpacity={0.7}>
        <Text style={styles.Up}>Upload a Picture</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('FindFriends1')}>
        <Text style={{fontSize: 20}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
    page:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 50,
    },
    text:{
        fontSize: 20,
        textAlign:'center',
    },
    pic:{
        height: 100,
        width: 100,
        backgroundColor:  '#3777f0',
        top: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems:'center',
    },
    upload:{
        // top: 30,
        width: 200,
        height: 50,
        backgroundColor:  '#3777f0',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Up:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
});