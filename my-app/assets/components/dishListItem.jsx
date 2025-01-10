import {View, Text, StyleSheet, Image} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'

const restaurant = restaurants[0]

const DishListItem = ({dish}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
                <Text style={styles.price}>{dish.price}</Text>

            </View>
                {dish.image && (<Image source={{uri:dish.image}} style={styles.image} />)}


        </View>
    )
}
    


const styles = StyleSheet.create({
    container:{
        borderBottomColor:"lightgray",
        borderBottomWidth:1,
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:10,
        flexDirection:"row"
    },
    name:{
        fontWeight:"600",
        fontSize:16,
        letterSpacing:.5,
    },
    description:{
        color:"gray",
        marginVertical:5,
    },
    price:{
        fontSize:16,
    },
    image:{
        height: 100,
        aspectRatio: 1,
    }
});

export default DishListItem