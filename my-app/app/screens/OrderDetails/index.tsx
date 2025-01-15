import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import orders from "/workspaces/training/my-app/assets/data/orders.json"
import styles from "/workspaces/training/my-app/app/screens/OrderDetails/styles.tsx"
import restaurants from "/workspaces/training/my-app/assets/data/restaurants.json"
import DishListItem from '@/assets/components/dishListItem';
import OrderListItem from '@/assets/components/orderListItem';
import BasketDishItem from '/workspaces/training/my-app/assets/components/BasketDishItem.jsx/index.tsx'

const order = orders[0]

const OrderDetailsHeader = () => {
    return (
        <View>
            <View style={styles.page}>

                <Image source={{uri:order.Restaurant.image}} style={styles.image}/>

                <View style={styles.container}>
                    <Text style={styles.title}>{order.Restaurant.name}</Text>
                    <Text style={styles.subtitle}>Delivery Fee {order.Restaurant.deliveryFee}</Text>
                    <Text style={styles.subtitle}>Delivery Time ~{order.Restaurant.minDeliveryTime}-{order.Restaurant.maxDeliveryTime}</Text>
                </View>
        
            </View>
        </View>

    )
}

const OrderDetails = () => {
    return (
        <FlatList 
            ListHeaderComponent={OrderDetailsHeader}
            data={restaurants[0].dishes} 
            renderItem={({ item }) => (<BasketDishItem basketDish={item} />)}
        />
    );
};



export default OrderDetailsHeader;