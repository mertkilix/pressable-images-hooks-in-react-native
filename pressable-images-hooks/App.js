import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>
        <WelcomeScreen/>
        
      </View>
      <LittleLemonFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});


