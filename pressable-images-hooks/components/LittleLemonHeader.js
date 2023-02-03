import * as React from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';

export default function LittleLemonHeader() {
  return (

    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/LittleLogo.png")} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.13,
alignItems:'center',
    backgroundColor: '#EE9972',


  },
  logo: {
    height: 80,
    width: 240,
    resizeMode: 'contain',

    
 },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
