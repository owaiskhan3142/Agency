import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
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
    <KeyboardAvoidingView style={styles.main}>
      <View style={{marginTop: hp(100)}}>
        <Text style={styles.heading}>Login</Text>
        <Text>E-Mail</Text>
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
        </View>
        <TouchableOpacity style={{justifyContent: 'flex-end'}}>
          <Text style={{textAlign: 'right'}}>Forgot password?</Text>
        </TouchableOpacity>
        <InputButton title={'Login'} bgcolor="black" />
      </View>
      <View style={styles.container}>
        <View>
          {/* <InputButton title={'Register'} bgcolor="black" />
           */}
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingHorizontal: wp(50),
              paddingVertical: hp(10),
              borderRadius: 50,
            }}>
            <Text style={{color: 'white'}}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingHorizontal: wp(50),
              paddingVertical: hp(10),
              borderRadius: 50,
            }}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: hp(20),
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  main: {
    marginLeft: wp(20),
    marginRight: wp(20),
    height: '100%',
  },
  button: {
    backgroundColor: 'black',
  },
  icon: {
    marginLeft: 10,
  },
  pass: {
    flexDirection: 'column',
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
});
