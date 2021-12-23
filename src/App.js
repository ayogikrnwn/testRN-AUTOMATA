/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { HomePage, SplashScreen } from './pages';
import Router from './Router';


const App = () => {
 
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
