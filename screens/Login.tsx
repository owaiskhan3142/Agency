import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { wp, hp } from '../utils/helper'
import InputButton from '../components/inputButton';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.heading}>Login</Text>
      <View style={{ marginTop: hp(40) }}>
        <Text>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder='Enter your email'
        />

        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your password"
          keyboardType="numeric"
        />
        <TouchableOpacity style={{ justifyContent: 'flex-end' }}><Text style={{ textAlign: 'right' }}>
          Forgot password?
        </Text></TouchableOpacity>
        <InputButton title={"login"} />
        <TouchableOpacity style={styles.button}><Button title='Login' /></TouchableOpacity>
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
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center'
    // marginLeft: wp(150)
  },
  main: {
    marginTop: hp(150),
    marginLeft: wp(30),
    marginRight: wp(30)
  },
  button: {
    backgroundColor: 'black',

  }
});
