import React, {Profiler, ReactNode} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faHome,
  faAdd,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {wp, hp} from '../utils/helper';
import AppStack from '../screens/Appstack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';
import AddStart from '../screens/AddStart';
import CreateListing from '../screens/CreateListing';

const Stack = createStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: hp(100),
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="My Ads"
        component={AddStart}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: hp(100),
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Listing"
        component={CreateListing}
        options={{
          title: 'My ads',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: hp(100),
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AboutStack />
    </NavigationContainer>
  );
}
