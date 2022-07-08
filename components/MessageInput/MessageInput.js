/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { Icon } from 'react-native-vector-icons/AntDesign';

const MessageInput = () => {
  const sendMessage = () => {
    // send message
    console.warn("sending: ", message);
    setMessage('');
  }
  const onPlusClicked = () => {
    console.warn("On plus clicked")
  }

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  }
  const [message, setMessage] = useState('');
  return (
    <KeyboardAvoidingView style={styles.root} 
      behavior={Platform.OS=== "ios" ? "padding" : 'height'}
        >
      <View style={styles.inputContainer}>
      <Image source={require('../../asserts/images/icon1.webp')} style={styles.smileIcon}/>
      <TextInput placeholder="Signal message..." 
        value={message}
        onChangeText={(newMessage) => setMessage(newMessage)}
        style={styles.input}/>
      <Image source={require('../../asserts/images/icon2.png')} style={styles.camera}/>
      <Image source={require('../../asserts/images/icon1.webp')} style={styles.microphone}/>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        {message ? <Text style={styles.btnText}>-</Text> : <Text style={styles.btnText}>+</Text>}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
    root:{
      flexDirection: 'row',
      padding: 7,
    },
    inputContainer:{
      backgroundColor: '#f2f2f2',
      flex: 1,
      marginRight: 10,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#dedede',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input:{
      flex: 1,
      marginHorizontal: 1,
    },
    buttonContainer:{
      width: 50,
      height: 50,
      backgroundColor: '#3872E9',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText:{
      color: 'white',
      fontSize: 35,
    },
    smileIcon:{
      width: 25,
      height: 25,
      marginHorizontal: 5,
    },
    camera:{
      width: 25,
      height: 25,
      marginHorizontal: 1,
    },
    microphone:{
      width: 25,
      height: 25,
      marginHorizontal: 1,
    },

});