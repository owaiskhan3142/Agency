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

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.heading}>Login</Text>
      <View style={{marginTop: hp(40)}}>
        <Text>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your email"
        />

        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          keyboardType="numeric"
        />
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
    height: 50,
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: hp(20),
    flex: 1,
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  main: {
    marginTop: hp(150),
    marginLeft: wp(30),
    marginRight: wp(30),
  },
  button: {
    backgroundColor: 'black',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
});
