import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView} from 'react-native'


const handleProfilePage = () => {
    navigation.navigate("Profile")
}


export default function Profile() {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding"
        >
            <View>
                <Text styles={styles.text}>Profile</Text>
            </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder = "Harysh"
                style = {styles.input}
            />
            <TextInput
                placeholder = "hmagesh75"
                style = {styles.input}
            />
            <TextInput
                placeholder = "*********"
                style = {styles.input}
                secureTextEntry
            />
        </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    inputContainer: {
        width: '80%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal'
    },
    text: {
        fontSize: 20
    }
})