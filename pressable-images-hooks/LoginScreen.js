import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput,Pressable,Image } from 'react-native';
import ViewHideMenu from './ViewHideMenu';
export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  return (
    <ScrollView style={styles.container}>



      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!showLoginScreen && (<Text style={styles.regularText}>Login to continue!</Text>)}
      {showLoginScreen && (<Text style={styles.regularText}>You have logged in! {email}</Text>)}

      {!showLoginScreen && (<TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />)}
      {!showLoginScreen && (<TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />)}

<Pressable
	style={styles.button}
	onPress={() => {
		setShowLoginScreen(!showLoginScreen);
	}}>
{!showLoginScreen && (<Text style={styles.buttonText}>Login!</Text>)}
      {showLoginScreen && (<Text style={styles.buttonText}>Logout!</Text>)}

</Pressable>







    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 80,
    backgroundColor: '#EE9972',
    borderColor: '#EDEFEE',
    borderWidth: 0,
    borderRadius: 30,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
