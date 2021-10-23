import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Button, Alert} from 'react-native';

const SetupScreen = () => {
	const [firstName, onChangeFirstName] = React.useState("");
	const [lastName, onChangeLastName] = React.useState("");
	const [email, onChangeEmail] = React.useState("");
	const [phone, onChangePhone] = React.useState("");

	return (
		<SafeAreaView>
			<Text style={styles.header}>
					Enter Your Information
			</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeFirstName}
				value={firstName}
				placeholder="First Name"

			/>

			<TextInput
				style={styles.input}
				onChangeText={onChangeLastName}
				value={lastName}
				placeholder="Last Name"
			/>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={onChangeEmail}
				placeholder="Email"
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChangePhone}
				value={phone}
				placeholder="Phone Number"
				keyboardType="numeric"
			/>

		<Button
			title="Continue"
			color="Red"
			onPress={checkComplete}
		></Button>
		</SafeAreaView>
	);

	function checkComplete() {
		console.log(firstName);
		if(firstName.trim() == "" || lastName.trim() == "" || email.trim() == "" || phone.trim() == "") {
			Alert.alert("Input is empty")
		} 
		
	}	
};

const styles = StyleSheet.create({
	header: {
			fontSize: 25,
			textAlign: 'center',
			fontWeight: 'bold',
			color: 'brown',
	},
	input: {
		height: 40,
		margin: 20,
		borderWidth: 1,
		padding: 10,
	},
});


export default SetupScreen;