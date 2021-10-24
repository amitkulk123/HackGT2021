import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Button, Alert} from 'react-native';

const SetupScreen = () => {
	const [firstName, onChangeFirstName] = React.useState("");
	const [lastName, onChangeLastName] = React.useState("");
	const [email, onChangeEmail] = React.useState("");
	const [phone, onChangePhone] = React.useState("");

	return (

		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>Side Bar</Text>
			<TouchableOpacity style={styles.subitem}>Profile</TouchableOpacity>
			<TouchableOpacity style={styles.subitem}>Friends</TouchableOpacity>
			<TouchableOpacity style={styles.subitem}>Billing</TouchableOpacity>
			<TouchableOpacity style={styles.subitem}>Settings</TouchableOpacity>
			<TouchableOpacity style={styles.subitem}>Points</TouchableOpacity>
			
		</SafeAreaView>	
	)

	
}

const styles = StyleSheet.create({
	container: {
		// position: absolute,
		// width: 296px,
		// height: 812px,
		// left: 0px,
		// top: 0px,
	},
	header: {
			fontSize: 25,
			fontWeight: 'bold',
			color: 'brown',
	},
	subitem: {
		backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
	},
	input: {
		height: 40,
		margin: 20,
		borderWidth: 1,
		padding: 10,
	},
});


export default SetupScreen;