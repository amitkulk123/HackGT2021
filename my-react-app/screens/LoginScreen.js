import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput,TouchableOpacity, View} from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = "padding"
        >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder = "Email"
                // value = { }
                // onChangeText={text => }
                style = {styles.input}
            />
            <TextInput
                placeholder = "Password"
                // value = { }
                // onChangeText={text => }
                style = {styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => { }}
                style={styles.button}
            >
            <Text style={styles.buttonOutLineText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { }}
                style={[styles.button, styles.buttonOutLine]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
})