/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Blue = '#3872E9';
const grey = 'lightgrey';

const myID = 'u1';

const Message = ({ message }) => {
    const isMe = message.user.id === myID
  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={{color: isMe ? 'black' : '#fff',}}>{message.content}</Text> 
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3872E9',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
    },
    leftContainer:{
      backgroundColor: Blue,
      marginLeft: 10,
      marginRight: 'auto',
    },
    rightContainer:{
      backgroundColor: grey,
      marginRight: 10,
      marginLeft: 'auto', 
    },
  });