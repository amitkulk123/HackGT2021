import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button } from 'react-native'
import '../src/globalvars.js'
import { auth } from '../firebase'


const HomeScreen = () => {
    global.numPoints = 0;
    global.subtotal = 0;
    
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

    const alertPoints = () => {
        Alert.alert("You have: " + global.numPoints + " points")
    }
    
    
    const handleCartDescription = () => {
        navigation.navigate("Cart")
    }

    const handleBagelDescription= () => {
        global.numPoints += 5
        navigation.navigate("Bagel")
    }

    const handleBreadDescription= () => {
        global.numPoints += 5
        navigation.navigate("Bread")
    }
    const handleProfilePage = () => {
        navigation.navigate("Profile")
    }
    const handleCakeDescription= () => {
        global.numPoints += 5
        navigation.navigate("Cake")
    }

    const handleFriendPage = () => {
        navigation.navigate("Friends")
    }


    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                {/* <Text>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity> */}
 
            <TouchableOpacity onPress = {() => { Alert.alert("Side bar appears")}}>
                <Image style={styles.barImage} source={require("../assets/bars.png")} />
            </TouchableOpacity>
                <View style={styles.rightTopBar}>
                    <Text onPress={alertPoints} style={styles.topBarText}>Points</Text>
                    <Text onPress={handleCartDescription} style={styles.topBarText}>Cart</Text>
                    <Text onPress={handleFriendPage} style={styles.topBarText}>Friends</Text>
                    <TouchableOpacity onPress={handleProfilePage}>
                        <Image style={styles.profilepic} source={require('../assets/profile.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.itemScroll}>

                <Text style={styles.heading}>Welcome, Harysh!</Text>

                <TouchableOpacity onPress={handleBagelDescription}>
                    <View style={styles.items}>
                        <Image style={styles.itemImage} source={require('../assets/bagel.jpg')} />
                        <Text style={styles.itemName}>Bagel</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/bread-loaf.jpg')} />
                        <Text style={styles.itemName}>Bread Loaf</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCakeDescription}>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/cake.jpg')} />
                        <Text style={styles.itemName}>Cake</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/chocolate-cookie.jpg')} />
                        <Text style={styles.itemName}>Cookie</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/cinnamon-roll.jpg')} />
                        <Text style={styles.itemName}>Cinnamon Roll</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/croissant.jpg')} />
                        <Text style={styles.itemName}>Croissant</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/latte.jpg')} />
                        <Text style={styles.itemName}>Latte</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/muffin-blueberry.jpg')} />
                        <Text style={styles.itemName}>Blueberry Muffin</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/muffin-chocolate.jpg')} />
                        <Text style={styles.itemName}>Chocolate Muffin</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <View>
                        <Image style={styles.itemImage} source={require('../assets/pizza.jpg')} />
                        <Text style={styles.itemName}>Pizza</Text>
                    </View>
                </View>
                </TouchableOpacity>

            </ScrollView>

                
        </View>
        
        
        )
    }
    
    export default HomeScreen
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#73FFCD',
        },
        topBar: {
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            backgroundColor: 'teal',
            opacity: 0.7
        },
        topBarText: {
            marginLeft: 100,
            marginRight: 20,
            fontWeight: 'bold'
        },
        rightTopBar: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10
        },
        barImage: {
            height: 50,
            width: 50,
        },
        heading: {
            fontSize: 50,
            textAlign: 'center',
            margin: 20,
        },
        subheading: {
            fontSize: 20,
            textAlign: 'center',
            margin: 15,
        },
        items: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            marginBottom: 20,
            // backgroundColor: 'rgba(244,164,96,1)'
            backgroundColor: '#fff'

        },
        itemImage: {
            width: 100,
            height: 100,
            margin: 40,
        },
        itemName: {
            fontSize: 20,
            margin: 20,
            fontFamily: "Times New Roman",
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#0782F9',
            width: '60%',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 40,
        },
        profilepic: {
            height: 50,
            width: 50,
            marginLeft: 200,
        }
        // buttonText: {
        //     color: 'white',
        //     fontWeight: '700',
        //     fontSize: 16,
        // }
    })