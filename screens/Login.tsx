import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {wp, hp} from '../utils/helper';
import InputButton from '../components/inputButton';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.heading}>Login</Text>
      <View style={{marginTop: hp(40)}}>
        <Text style={{color: 'white'}}>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your email"
        />
        <View style={styles.pass}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            keyboardType="numeric"
          />
          {/* <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          /> */}
        </View>
        <TouchableOpacity style={{justifyContent: 'flex-end'}}>
          <Text style={{textAlign: 'right'}}>Forgot password?</Text>
        </TouchableOpacity>
        <InputButton title={'login'} bgcolor="black" />
      </View>
      <View style={styles.container}>
        <InputButton title="Login" bgcolor="black" />
        <InputButton title="Register" bgcolor="purple" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    // height: ,
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: hp(20),
    // flex: 1,
  },
  heading: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  main: {
    marginTop: hp(150),
    marginLeft: wp(30),
    marginRight: wp(30),
    display: 'flex',
  },
  button: {
    backgroundColor: 'black',
  },
  icon: {
    marginLeft: 10,
  },
  pass: {
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#f3f3f3',
    borderRadius: 8,
    // paddingHorizontal: 14,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
    marginTop: 20,
    bottom: -250,
    // flex: 1,
    alignItems: 'center',
    // marginBottom: 20,
  },
});
