/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Profiler} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faAdd,
  faArrowAltCircleRight,
  faBorderAll,
  faHome,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

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
import Home from './screens/Home';
import Categories from './screens/Categories';
import Profile from './screens/Profile';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesomeIcon
                    icon={faHome as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    width: Platform.OS == 'ios' ? 50 : 60,
                    height: Platform.OS == 'ios' ? 50 : 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 50,
                    borderRightColor: 'blue',
                  }}>
                  <FontAwesomeIcon
                    icon={faAdd as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    top: Platform.OS == 'ios' ? -10 : -20,
                    width: Platform.OS == 'ios' ? 50 : 60,
                    height: Platform.OS == 'ios' ? 50 : 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#514646',
                    borderWidth: 5,
                    borderRadius: 50,
                    backgroundColor: 'white',
                  }}>
                  <FontAwesomeIcon
                    icon={faAdd as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Home',
            headerShown: false,

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    width: Platform.OS == 'ios' ? 50 : 60,
                    height: Platform.OS == 'ios' ? 50 : 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderColor: 'black',
                    // borderWidth: 2,
                    borderTopLeftRadius: 50,
                    // backgroundColor: 'blue',
                  }}>
                  <FontAwesomeIcon
                    icon={faAdd as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesomeIcon
                    icon={faStar as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
