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
  faPortrait,
  faUser,
  faHeart,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import {wp, hp} from './utils/helper';
import AppStack from './screens/Appstack';

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
import AddStart from './screens/AddStart';
import CreateListing from './screens/CreateListing';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
interface HeaderBackButtonProps {
  // Define your props here
}

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
    height: 200,
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={AppStack}
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
          component={CreateListing}
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
                    icon={faStar as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="LIST YOUR COMPANY"
          component={AddStart}
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
            title: 'MY ADS',
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
                    icon={faHeart as IconProp}
                    color={focused ? 'black' : 'grey'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={CreateListing}
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
                    icon={faUser as IconProp}
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
