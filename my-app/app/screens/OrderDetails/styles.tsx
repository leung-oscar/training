import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    container:{
        margin:10,
    },
    iconContainer:{
        position:"absolute",
        top:20,
        left:10,
        zIndex: 1,
    },
    image: {
        width: "100%",  
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',  
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        
    },
});