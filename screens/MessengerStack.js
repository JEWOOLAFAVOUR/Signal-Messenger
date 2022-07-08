/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatHome from './ChatHome';
import ChatRoomScreen from './ChatRoomScreen';

const Stack = createStackNavigator();
const MessengerStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ChatHome" component={ChatHome}
              options={{headerTitle: HomeHeader}}/>
            <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen}
              options={{headerTitle: ChatRoomHeader,
              headerBackTitleVisible: false,
              }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeHeader = (props) => {
const {width} = useWindowDimensions();
  return(
    <View style={{flexDirection: 'row', justifyContent: 'space-between',
    padding: 10, alignItems: 'center', width,}}>
      <Image source={require('../asserts/images/image1.jpg')}
        style={styles.homeImage}/>
    <Text style={styles.text}>Home</Text>
    <View style={styles.order}>
    <Image source={require('../asserts/images/icon2.png')} style={styles.icon}/>
    <Image source={require('../asserts/images/icon1.webp')} style={styles.icon2}/>
    </View>
    </View>
  );
};

const ChatRoomHeader = (props) => {
  console.log(props)
const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',
    padding: 0, alignItems: 'center', width: width - 55, marginLeft: -20,}}>
      <Image source={require('../asserts/images/image1.jpg')}
        style={styles.homeImage}/>
    <Text style={styles.text}>{props.children}</Text>
    <View style={styles.order}>
    <Image source={require('../asserts/images/icon2.png')} style={styles.icon}/>
    <Image source={require('../asserts/images/icon1.webp')} style={styles.icon2}/>
    </View>
    </View>
  );
};

export default MessengerStack;
const styles = StyleSheet.create({
  homeImage:{
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  text:{
    textAlign: 'center',
    flex: 1,
    fontWeight:'bold',
    fontSize: 20,
  },
  icon:{
    tintColor: 'black',
    height: 20,
    width: 20,
    right: 10,
  },
  icon2:{
    height: 20,
    width: 20,
  },
  order:{
    flexDirection: 'row',
    paddingRight: 18,
  },
});
