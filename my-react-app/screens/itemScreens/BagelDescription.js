import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button, TextInput } from 'react-native'
import { auth } from '../../firebase'


const handleButton = () => {
    
    Alert.alert("Added a bagel to your cart")
}

export default function BagelDescription() {
    return (
        <View>
            <Text>Bagels are tasty!</Text>
            <Text>Enjoy the crisp, shiny crust of our freshly baked bagels</Text>
        
            <Button onPress={handleButton} title="Buy Now $3.00" />
        </View>

        
    );
  }