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
  ScrollView,
} from 'react-native';
import React from 'react';
import {wp, hp} from '../utils/helper';
import InputButton from '../components/inputButton';
// import Icon from 'react-native-vector-icons/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
const Register = () => {
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
    <KeyboardAvoidingView style={styles.main}>
      <Text style={styles.heading}>Register</Text>
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
        <View>
          <Text>E-Mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your email"
          />

          <Text>Password</Text>
          <View style={styles.passField}>
            <TextInput
              style={styles.passInput}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!passwordVisible}
              placeholder="*********"
            />
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={togglePasswordVisibility}>
              <FontAwesomeIcon icon={faEyeSlash as IconProp} />
            </TouchableOpacity>
          </View>
          <Text>Confirm Password</Text>
          <View style={styles.passField}>
            <TextInput
              style={styles.passInput}
              onChangeText={setConfirm}
              value={confirm}
              secureTextEntry={!passwordVisible}
              placeholder="**********"
            />
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={togglePasswordVisibility}>
              <FontAwesomeIcon icon={faEyeSlash as IconProp} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position: 'absolute', width: '100%', bottom: hp(-120)}}>
          <TouchableOpacity onPress={handelSubmit}>
            <InputButton
              title={'Create Account'}
              bgcolor="black"
              onPress={handelSubmit}
            />
          </TouchableOpacity>
          <Text style={{textAlign: 'center', marginTop: hp(10)}}>
            By contuinuing, you agree to our{' '}
            <Text
              onPress={() => {
                console.log('but this is');
              }}
              style={{color: '#00F'}}>
              Terms of service
            </Text>{' '}
            and{' '}
            <Text
              onPress={() => {
                console.log('but this is');
              }}
              style={{color: '#00F'}}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    // height: 50,
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: hp(20),
    // flex: 1,
  },
  inputSmall: {
    borderColor: 'black',
    // height: 50,
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
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
