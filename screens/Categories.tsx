import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React from 'react';
import Nav from '../components/Nav';
import CategoryCard from '../components/CategoryCard';

import {wp, hp} from '../utils/helper';
const DATA2 = [
  {
    id: '1',
    photo: require('../assets/plumber.jpg'),
    title: 'Plumber',
  },
  {
    id: '2',
    photo: require('../assets/decor.jpg'),
    title: 'Home Decor',
  },
  {
    id: '3',
    photo: require('../assets/insurance.jpg'),
    title: 'Doctor',
  },
  {
    id: '4',
    photo: require('../assets/house.jpg'),
    title: 'Insurance',
  },
  {
    id: '5',
    photo: require('../assets/plumber.jpg'),
    title: 'Insurance',
  },
  {
    id: '6',
    photo: require('../assets/plumber.jpg'),
    title: 'Insurance',
  },
  {
    id: '7',
    photo: require('../assets/plumber.jpg'),
    title: 'Insurance',
  },
];

const Login = () => {
  return (
    <View>
      <Nav page="Categories" />
      <FlatList
        data={DATA2}
        renderItem={({item}) => (
          <CategoryCard title={item.title} photo={item.photo} />
        )}
        keyExtractor={item => item.id}
        style={{marginHorizontal: wp(20), marginTop: DATA2[0] ? hp(40) : hp(0)}}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
