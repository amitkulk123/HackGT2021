import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import { auth } from '../firebase'
import SelectDropdown from 'react-native-select-dropdown'
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const HomeScreen = () => {

    
    return (
        
        <View style={styles.container}>
            
            {/*<Text>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>*/}

            <View style={styles.topBar}>
                
 
            <TouchableOpacity onPress = {() => { Alert.alert("Side bar appears")}}>
                <Image style={styles.barImage} source={require("../assets/bars.png")} />
            </TouchableOpacity>
                <View style={styles.rightTopBar}>
                    <Text style={styles.topBarText}>Points</Text>
                    <Text style={styles.topBarText}>Cart</Text>
                </View>
            </View>


            


            <ScrollView style={styles.itemScroll}>

                <Text style={styles.heading}>Suggested</Text>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/bagel.jpg')} />
                    <Text style={styles.itemName}>Bagel</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/bread-loaf.jpg')} />
                    <Text style={styles.itemName}>Bread Loaf</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/cake.jpg')} />
                    <Text style={styles.itemName}>Cake</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/chocolate-cookie.jpg')} />
                    <Text style={styles.itemName}>Chocolate Cookie</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/cinnamon-roll.jpg')} />
                    <Text style={styles.itemName}>Cinnamon Roll</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/croissant.jpg')} />
                    <Text style={styles.itemName}>Croissant</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/latte.jpg')} />
                    <Text style={styles.itemName}>Latte</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/muffin-blueberry.jpg')} />
                    <Text style={styles.itemName}>Blueberry Muffin</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/muffin-chocolate.jpg')} />
                    <Text style={styles.itemName}>Chocolate Muffin</Text>
                </View>

                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/pizza.jpg')} />
                    <Text style={styles.itemName}>Pizza</Text>
                </View>

                </ScrollView>

                
        </View>
        
        
        )
    }
    
    // export default HomeScreen
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#73FFCD',
        },
        topBar: {
            flexDirection: 'row',
            backgroundColor: 'teal',
            height: 50,
            alignItems: 'center',
        },
        topBarText: {
            marginLeft: 100,
            marginRight: 20,
        },
        rightTopBar: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10,
        },
        barImage: {
            height: 50,
            width: 50,
        },
        heading: {
            fontSize: 50,
            fontStyle: 'italic',
            textAlign: 'center',
            margin: 20,
        },
        items: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginBottom: 20,
            // backgroundColor: 'rgba(244,164,96,1)'
            backgroundColor: 'rgba(244,244,244,1)'

        },
        itemImage: {
            width: 100,
            height: 100,
            margin: 20,
        },
        itemName: {
            fontSize: 20,
            margin: 20,
            fontFamily: "Times New Roman",
        },
        button: {
            backgroundColor: '#0782F9',
            width: '60%',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 40,
        },
        // buttonText: {
        //     color: 'white',
        //     fontWeight: '700',
        //     fontSize: 16,
        // }
    })