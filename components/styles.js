import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10
    },
    image:{
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    badgeContainer:{
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45,
        top: 10,
    }, 
    badgeText:{
        color: '#fff',
        fontSize: 12,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        color: 'grey',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;