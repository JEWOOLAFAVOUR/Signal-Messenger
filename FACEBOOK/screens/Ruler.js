/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Ruler = ({text}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      <View style={styles.ruler}></View>
    </View>
    );
  };

export default Ruler;

const styles = StyleSheet.create({
      container:{
        paddingTop: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
      },
      text:{
        fontSize: 20, 
        paddingBottom: 10,
        fontWeight: '500'
      },
      ruler:{
        height: 1,
        width: '120%',
        backgroundColor: 'grey',
      },
});