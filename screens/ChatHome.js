/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatHomeData from '../asserts/data/ChatHomeData';

const ChatHome = () => {
  return (
    <View style={styles.page}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={ChatHomeData}
            renderItem={({item})=> <ChatRoomItem ChatRoom={item}/> }
        />
    </View>
  );
};

export default ChatHome;
const styles = StyleSheet.create({
    page:{
        backgroundColor: '#fff',
        flex: 1,
    },
});