import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/RootStack';

export default function App() {
  const [initialState, setInitialState] = React.useState();
  const crap = () => {
    alert('This is crap')
  }
  return (
    <>
      <RootStack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
