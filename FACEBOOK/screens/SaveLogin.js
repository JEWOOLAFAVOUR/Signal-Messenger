/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ruler from './Ruler';

const SaveLogin = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
          <Ruler text='Facebook'/>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 13}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>Save login info?</Text>
            <Text style={{fontSize: 20, color: 'grey', paddingTop: 7, textAlign: 'center'}}>Next time you log in on this device, just tap your
             account instead of typing password.</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./save1.jpg')} style={styles.image}/>
          </View>
          <View style={{position: 'absolute', bottom: 10, flexDirection: 'row', left: 10 }}>
            <TouchableOpacity style={{ backgroundColor:  'lightgrey', padding: 12, borderRadius: 5, flex: 1,
              marginRight: 5, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={0.7} onPress={()=>navigation.navigate('ProfilePicture')}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Not Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:  '#3777f0', padding: 12, borderRadius: 5,
                flex: 1, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={0.7} onPress={()=>navigation.navigate('ProfilePicture')}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Ok</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor:  '#3777f0', padding: 12, borderRadius: 5}} activeOpacity={0.7}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Next</Text>
          </TouchableOpacity> */}
        </View>
      );
};

export default SaveLogin;

const styles = StyleSheet.create({
  image:{
    height: '85%',
    width: '100%',
  },
});