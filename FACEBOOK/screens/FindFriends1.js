/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ruler from './Ruler';
import { Icon } from 'react-native-vector-icons/Ionicons';

const FindFriends1 = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
          <Ruler text='Find Friends'/>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Facebook is better with friends</Text>
            <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>See who's one Facebook by continuously uploading your 
                contacts. Then let us know who you want to add as friends.</Text>
          </View>
          <View style={{paddingVertical: 10}}>
                <Image source={require('./resturant1.jpeg')} style={styles.image}/>
          </View>
          <View style={{paddingTop: 15}}>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} 
            activeOpacity={0.7}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Turn on</Text>
          </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
            <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>Info about contacts in your address book, including names, 
            phone numbers and nicknames, will be sent to Facebook so we can suggest friends and provider and improve ads for you and others, and offer a
             better servive. You can turn this off in <Text style={styles.bold}>Settings</Text> and <Text style={styles.bold}>manage or delete</Text> contact information you share with Facebook. <Text style={styles.bold}>Learn more</Text></Text>
          </View>
          {/* <Icon name='delete' size={20}/> */}
        </View>
      )
};

export default FindFriends1;

const styles = StyleSheet.create({
    bold:{
        fontWeight: 'bold',
        color: '#3777f0',
    },
    image:{
        height: 150,
        width: '100%',
    },
});