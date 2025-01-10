import {View, Text, StyleSheet, Image} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'

const restaurant = restaurants[0]

const DishListItem = ({dish}) => {
    return (
        <View >
            <Text>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>{dish.price}</Text>
        </View>
    )
}
    


const styles = StyleSheet.create({

});

export default DishListItem