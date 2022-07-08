/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';

const ChatRoomItem = ({ ChatRoom }) => {
    const user = ChatRoom.name;
    const navigation = useNavigation();
    const onPress = () => {
        console.warn('pressed on ', user);
        navigation.navigate('ChatRoomScreen', {id: ChatRoom.id});
    };
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={ChatRoom.image}
                style={styles.image}/>
                {ChatRoom.status && <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{ChatRoom.status}</Text>
                </View>}
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                <Text style={styles.name}>{ChatRoom.name}</Text>
                <Text style={styles.text}>{ChatRoom.lastMessage.createdAt}</Text>
            </View>
            <Text numberOfLines={1} style={styles.text}>{ChatRoom.lastMessage.content}</Text>
          </View>
        </Pressable>
      
      );
};
export default ChatRoomItem;
