import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button, TextInput } from 'react-native'
import { auth } from '../../firebase'


const handleButton = () => {
    global.subtotal += 7.00
    Alert.alert("Added a loaf to your cart")
}

export default function BagelDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.textFormat}>Get, a nice big loaf of bread to feed you for a while!</Text>
            <Text style={styles.textFormat}>Let's get that bread!</Text>
            <Image style={styles.itemImage} source={require('../../assets/bread-loaf.jpg')} />
            <Button onPress={handleButton} title="Buy Now $7.00" />
        </View>

        
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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