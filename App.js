/*
 *@Author Vaibhav Biturwar
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {AppState} from './src/Context/appState';
import {Component1} from './src/component1';
import {Component2} from './src/component2';
import {Component3} from './src/component3';

const App = () => {
  return (
    <AppState>
      <View style={styles.container}>
        <Component1 />
        <Component2 />
        <Component3 />
      </View>
    </AppState>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;
