import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button } from 'react-native'
import { auth } from '../../firebase'



export default function BagelDescription() {
    return (
        <View>
            <Text>Bagels are tasty!</Text>
            <Text>Enjoy the crisp, shiny crust of our freshly baked bagels</Text>
            
            {/* <TextInput> */}
            <Button title="Buy Now $3.00" />
        </View>

        
    );
  }