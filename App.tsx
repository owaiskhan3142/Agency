/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Register />
      {/* <Login /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
