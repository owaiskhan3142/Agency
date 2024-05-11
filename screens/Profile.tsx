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
        }}>
        <View>
          <Image
            source={require('../assets/user.jpg')}
            style={{width: wp(100), height: hp(100), borderRadius: 50}}
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.heading}>Owais</Text>
        <Text>owaiskhan314@yahoo.com</Text>
      </View>
      <KeyboardAvoidingView style={styles.main}>
        <ScrollView>
          <View style={styles.inputBox}>
            <Text
              style={{
                color: 'black',
              }}>
              Full Name
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Owais Khan
            </Text>
          </View>
          <View style={styles.inputBox}>
            <Text
              style={{
                color: 'black',
              }}>
              Nick Name
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              SwitchRex
            </Text>
          </View>
          <View style={styles.inputBox}>
            <Text
              style={{
                color: 'black',
              }}>
              Label
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              owaiskhan314@yahoo.com
            </Text>
          </View>
          <View style={styles.inputBox}>
            <Text
              style={{
                color: 'black',
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              owaiskhan314@yahoo.com
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inputBox}>
              <Text
                style={{
                  color: 'black',
                }}>
                Country
              </Text>
              <Text style={styles.inputSmall}>Pakistan</Text>
            </View>
            <View style={styles.inputBox}>
              <Text
                style={{
                  color: 'black',
                }}>
                Gender
              </Text>
              <Text style={styles.inputSmall}>Male</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text
              style={{
                color: 'black',
              }}>
              E-Mail
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              owaiskhan314@yahoo.com
            </Text>
          </View>
          <InputButton title="Logout" />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  inputBox: {
    // backgroundColor: 'blue',
    paddingStart: wp(25),
    borderColor: 'black',
    borderWidth: 1,
    height: hp(45),
    borderRadius: 50,
    paddingVertical: hp(3),
    marginBottom: hp(20),
    color: 'black',
  },
  inputSmall: {
    width: wp(120),
    color: 'black',
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  icon: {
    padding: 10,
  },
  passField: {
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
  main: {
    marginTop: hp(30),
    marginLeft: wp(30),
    marginRight: wp(30),
    display: 'flex',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
