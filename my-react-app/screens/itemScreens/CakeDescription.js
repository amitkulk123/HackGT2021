import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button, TextInput } from 'react-native'
import { auth } from '../../firebase'


const handleButton = () => {
    global.subtotal += 3.50
    Alert.alert("Added a slice of cake to your cart")
}

export default function BagelDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.textFormat}>Enjoy a delicious, savory piece of cake that will want you to get some more.</Text>
            <Image style={styles.itemImage} source={require('../../assets/cake.jpg')} />
            <Button onPress={handleButton} title="Buy Now $3.50" />
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
