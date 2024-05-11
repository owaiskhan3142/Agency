import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native'; // <-- import useNavigation hook

import Nav from '../components/Nav';
import HomeCard from '../components/HomeCard';
import HomeSmallCard from '../components/HomeSmallCard';
// import { FlatList } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

// import {ScrollView} from 'react-native-gesture-handler';
import {wp, hp} from '../utils/helper';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {faLocation, faLocationDot} from '@fortawesome/free-solid-svg-icons';

const DATA = [
  {
    id: '1',
    title: 'Sherwin-Williams',
    description: 'hehe.....',
    review: 23,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '2',
    title: 'Testing',
    description: 'haha....',
    review: 23,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '3',
    title: 'Testing',
    description: 'lkia ho raha.....',
    review: 23,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '4',
    title: 'Testing',
    description: 'hehe....',
    review: 45623,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '5',
    title: 'Testing',
    description: 'hehe.....',
    review: 2333,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '6',
    title: 'first 29',
    description: 'hehe....',
    review: 29,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
  {
    id: '7',
    title: 'second 29',
    description: 'hehe',
    review: 30,
    photo: [
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
      '../assets/plumber.jpg',
    ],
  },
];

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
    photo: require('../assets/house.jpg'),
    title: 'Doctor',
  },
  {
    id: '4',
    photo: require('../assets/insurance.jpg'),
    title: 'Insurance',
  },
];

const Home = ({navigation}: {navigation: any}) => {
  const len = DATA2.length;
  console.log(len);
  return (
    <ScrollView>
      <Nav page="Home" />
      <View
        style={{
          borderColor: 'black',
          borderRadius: 5,
          borderWidth: 1,
          marginHorizontal: wp(20),
          padding: 9,
          marginTop: hp(10),
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon icon={faLocationDot as IconProp} />
        <Text style={{marginLeft: 5, color: 'black'}}>
          3H - 815 Street, Canada
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(20),
          justifyContent: 'space-between',
          marginTop: hp(10),
          marginBottom: hp(10),
        }}>
        <Text style={{color: 'black'}}>Browse Categories {len}+</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Text style={{color: 'black'}}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={DATA2}
        renderItem={({item}) => (
          <HomeSmallCard title={item.title} photo={item.photo} />
        )}
        keyExtractor={item => item.id}
        style={{marginHorizontal: wp(20)}}
        showsHorizontalScrollIndicator={false}
      />
      <Text
        style={{
          marginLeft: wp(20),
          color: 'black',
          fontSize: 24,
        }}>
        Corporate Listing
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <HomeCard
            title={item.title}
            description={item.description}
            review={item.review}
            photo={item.photo}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
