import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button } from 'react-native'

const handleButton = () => {
    Alert.alert("Payment successful!")
}




export default function Cart() {
    return (
        <View style={styles.container}>
            <Text style={styles.textFormat}>Your subtotal is ${global.subtotal}</Text>
            <Text style={styles.amount}>${global.subtotal}</Text>
            {/* 1 point is 0.02 cents*/}
            
            <Text style={styles.textFormat}>With {global.numPoints} points, you save </Text>
            <Text style={styles.amount}>${global.numPoints * 0.02}</Text>

            <Text style={styles.textFormat}>Your final amount is:</Text>
            <Text style={styles.final}>${global.subtotal - global.numPoints*0.02}</Text>


            <Text style={styles.header}>Payment Options</Text>
            <Button onPress={handleButton} title="Pay with NCR Coin" />
            <Button onPress={handleButton} title="Pay with Credit/Debit" />
            <Button onPress={handleButton} title="Pay with Paypal" />
            <Button onPress={handleButton} title="Pay with Bitcoin" />


        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        fontSize: 30,
        color: 'green',
    },
    header: {
        marginTop: 30,
        fontSize:20.
    },
    final: {
        fontSize: 40,
        color: 'green',
    },
    textFormat: {
        fontSize: 20,
        margin: 20,
    },
    itemImage: {
        height: 250,
        width: 250,
        margin: 30,
    }
})
