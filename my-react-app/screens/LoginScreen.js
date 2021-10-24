import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput,TouchableOpacity, View, ImageBackground, Image} from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const navigation = useNavigation()

    const writeuserdata = () => {
        firebase.database().ref('Entry/').set({
            firstName,
            lastName
        }).then((data) => {
            console.log('data', data)
        }).catch((error) => {
            console.log('error', error)
        })
    }
    
    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubsribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <ImageBackground source={require('../assets/loginbackground.png')} style={styles.image}>
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding"
        >
        <Image source={require('../assets/proximity_logo.png')}/>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder = "First Name"
                value = {firstName}
                onChangeText = {text => setFirstName(text)}
                style = {styles.input}
            />
            <TextInput
                placeholder = "Last Name"
                value = {lastName}
                onChangeText = {text => setLastName(text)}
                style = {styles.input}
            />
            <TextInput
                placeholder = "Email"
                value = {email}
                onChangeText={text => setEmail(text)}
                style = {styles.input}
            />
            <TextInput
                placeholder = "Password"
                value = {password}
                onChangeText={text => setPassword(text)}
                style = {styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
            <Text style={styles.buttonOutLineText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutLine]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    figBackground: {
        backgroundColor: '#73DDFF',
        
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutLineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})