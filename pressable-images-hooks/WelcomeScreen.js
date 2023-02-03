import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <ScrollView style={styles.container1} >
    <View style={styles.container}>
  
     
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>


      <Image
        style={styles.image}
        source={require('./assets/img1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      
      <Image
        style={styles.image}
        source={require('./assets/img2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      
      <Image
        style={styles.image}
        source={require('./assets/img3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      
      <Image
        style={styles.image}
        source={require('./assets/img4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

</View>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',



    },
    container1: {
      flex:1,

  
      },

  headerText: {
    paddingTop: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 14,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    marginVertical: 8,
    color: 'black',
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
  image: {
    width: 280,
    height: 200,
    borderRadius: 10,
    marginBottom:10,
  },
});
