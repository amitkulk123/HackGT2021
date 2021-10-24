import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, Button } from 'react-native'
import { auth } from '../firebase'



const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }
    
    const handleBagelDescription= () => {
        navigation.navigate("Bagel")
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            
            {/* <Text>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity> */}

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


                <TouchableOpacity onPress={handleBagelDescription}>
                    <View style={styles.items}>
                        <Image style={styles.itemImage} source={require('../assets/bagel.jpg')} />
                        <Text style={styles.itemName}>Bagel</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/bread-loaf.jpg')} />
                    <Text style={styles.itemName}>Bread Loaf</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/cake.jpg')} />
                    <Text style={styles.itemName}>Cake</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/chocolate-cookie.jpg')} />
                    <Text style={styles.itemName}>Chocolate Cookie</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/cinnamon-roll.jpg')} />
                    <Text style={styles.itemName}>Cinnamon Roll</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/croissant.jpg')} />
                    <Text style={styles.itemName}>Croissant</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/latte.jpg')} />
                    <Text style={styles.itemName}>Latte</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/muffin-blueberry.jpg')} />
                    <Text style={styles.itemName}>Blueberry Muffin</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/muffin-chocolate.jpg')} />
                    <Text style={styles.itemName}>Chocolate Muffin</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.items}>
                    <Image style={styles.itemImage} source={require('../assets/pizza.jpg')} />
                    <Text style={styles.itemName}>Pizza</Text>
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
            backgroundColor: '#fff'

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