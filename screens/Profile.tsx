import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Nav from '../components/Nav';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {wp, hp} from '../utils/helper';
import InputButton from '../components/inputButton';
import {faEdit, faEyeSlash, faPen} from '@fortawesome/free-solid-svg-icons';
const Profile = () => {
  const [username, setUsername] = React.useState('');
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log('pressed');
  };

  const handelSubmit = () => {
    console.log(
      'first name: ',
      first,
      'last name: ',
      last,
      username,
      password,
      confirm,
    );
  };

  return (
    <View>
      <Nav page="Profile" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(10),
          flexDirection: 'row',
          // backgroundColor: 'pink',
          // // width: 'fit-content',
          // flex: 1,
          // alignSelf: 'flex-start',
        }}>
        <View>
          <Image
            source={require('../assets/user.png')}
            style={{width: wp(100), height: hp(100)}}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 999,
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
              borderWidth: 5,
              borderColor: 'white',
              borderRadius: 50,
              padding: 7,
            }}>
            <FontAwesomeIcon
              icon={faEdit as IconProp}
              color="white"
              size={15}
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.main}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text>First Name</Text>
              <TextInput
                style={styles.inputSmall}
                onChangeText={setFirst}
                value={first}
                placeholder="John"
              />
            </View>
            <View>
              <Text>Last Name</Text>
              <TextInput
                style={styles.inputSmall}
                onChangeText={setLast}
                value={last}
                placeholder="Doe"
              />
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text>E-Mail</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input: {
    marginTop: hp(10),
    // borderColor: 'black',
    // borderWidth: 1,
    // padding: 10,
    // borderRadius: 50,
    marginBottom: hp(20),
    // flex: 1,
  },
  inputBox: {
    paddingStart: wp(25),
    borderColor: 'black',
    borderWidth: 1,
    height: hp(70),
    borderRadius: 50,
    // paddingVertical: hp(5),
  },
  inputSmall: {
    borderColor: 'black',
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    marginBottom: hp(20),
    width: wp(150),
  },
  icon: {
    padding: 10,
  },
  passField: {
    // alignContent: 'center',
    // alignItems: 'center'

    marginTop: hp(10),
    marginBottom: hp(10),
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'space-between',
    paddingStart: wp(10),
    paddingEnd: wp(10),
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  main: {
    marginTop: hp(100),
    marginLeft: wp(30),
    marginRight: wp(30),
    display: 'flex',
  },
  button: {
    backgroundColor: 'black',
  },
  passInput: {
    // borderColor: 'black',
    // height: 50,
    // marginTop: hp(10),
    // borderWidth: 1,
    // padding: 10,
    // borderRadius: 7,
    // marginBottom: hp(20),
    // flex: 1,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    marginTop: 20,
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'Purple',
  },
});
