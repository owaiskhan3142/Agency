import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import Nav from '../components/Nav';
import {wp, hp} from '../utils/helper';
import InputButton from '../components/inputButton';

const AddStart = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Nav page="My Ads" />
      <View
        style={{
          marginVertical: hp(250),
          marginLeft: wp(20),
          marginRight: wp(20),
          backgroundColor: 'black',
          borderRadius: 50,
          paddingHorizontal: 50,
          paddingVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateListing')}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            "Advertise with us"
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddStart;

const styles = StyleSheet.create({});
