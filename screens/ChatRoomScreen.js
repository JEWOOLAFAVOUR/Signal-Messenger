/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core'
import Message from '../components/Message/Message';
import chatRoomData from '../asserts/data/chatRoomData';
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoomScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    console.warn("Displaying chat room", route.params?.id)
    navigation.setOptions({title: 'Oluwasegun Boluwatife'})
    return (
        <SafeAreaView style={styles.page}>
           <FlatList
            data={chatRoomData.messages}
            renderItem={({item})=><Message message={item}/>}
            inverted/>
            <MessageInput/>
        </SafeAreaView>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: 'white',
    },
});