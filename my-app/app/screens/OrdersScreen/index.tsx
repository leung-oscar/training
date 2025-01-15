import React from "react"
import {View, Text, FlatList} from "react-native"
import OrderListItems from "/workspaces/training/my-app/assets/components/orderListItem.jsx"
import orders from "/workspaces/training/my-app/assets/data/orders.json"

const order = orders[0]

const OrderScreen = () => {
    return (
        <View>
            <FlatList
                data={orders}
                renderItem={({item}) => <OrderListItems order={item}/>}
            />
        </View>
    )
}

export default OrderScreen;