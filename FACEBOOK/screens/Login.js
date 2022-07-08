/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ruler from './Ruler';

const Login = ({navigation}) => {
    const Ruler = () => {
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Facebook</Text>
          <View style={styles.rule}></View>
        </View>
        );
    };
    
  return (
    <View style={{flex: 1, margin: 10, }}>
        <Ruler/>
        <View style={{top: 8}}>
        <View style={{marginBottom: 6,}}>
            <Text style={{fontSize: 18, marginBottsom: 6}}>Mobile number or email</Text>
            <TextInput style={{borderWidth: 2, padding: 6, borderColor: 'grey', fontSize: 21, paddingHorizontal: 10}}/>
        </View>
        <View>
            <Text style={{fontSize: 18, marginBottom: 6}}>Password</Text>
            <View>
                <TextInput style={{borderWidth: 2, padding: 6, borderColor: 'grey', fontSize: 21, paddingHorizontal: 10}}/>
                
            </View>
        </View>
        <View marginTop={10}>
            <TouchableOpacity style={{backgroundColor: '#3777f0', padding: 12, justifyContent: 'center',
                    alignItems: 'center'}} activeOpacity={0.7}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Log in</Text>
            </TouchableOpacity>
            </View>
            <View marginTop={9}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{fontSize: 17, color: '#3777f0'}}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
                <View style={{paddingTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.ruler}></View>
                        <Text style={{margin: 5, fontSize: 20}}>or</Text>
                    <View style={styles.ruler}></View>
                </View>
                <View style={{top: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: 'green', padding: 12,}} activeOpacity={0.7}
                    onPress={()=>navigation.navigate('Join')}
                    >
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Create new account</Text>
                    </TouchableOpacity>
                </View> 
                <View style={{top: 35, }}>
                <TouchableOpacity style={{paddingVertical: 7}} activeOpacity={0.7}>
                    <Text style={{fontSize: 20, color: '#3777f0',}}>English (UK)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 7}} activeOpacity={0.7}>
                    <Text style={{fontSize: 20, color: '#3777f0',}}>Hausa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 7}} activeOpacity={0.7}>
                    <Text style={{fontSize: 20, color: '#3777f0',}}>Francais(France)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 7}} activeOpacity={0.7}>
                    <Text style={{fontSize: 20, color: '#3777f0',}}>More languages...</Text>
                </TouchableOpacity>    
                </View>         
            </View>  
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
    ruler:{
        height: 1,
        width: '42%',
        backgroundColor: 'grey',
    },
    container:{
        paddingTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center',

      },
      text:{
        fontSize: 22, 
        paddingBottom: 10,
        fontWeight: '600',
      },
      rule:{
        height: 1,
        width: '120%',
        backgroundColor: 'grey',
      },
});