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
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  const [username, setUsername] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.container}>
        <View>
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your email"
          />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
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
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          keyboardType="numeric"
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
        />
        <InputButton title={'Create Account'} bgcolor="black" />
      </View>
    </SafeAreaView>
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
    flex: 1,
  },
  icon: {
    padding: 10,
  },
  heading: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  main: {
    marginTop: hp(70),
    marginLeft: wp(15),
    marginRight: wp(15),
  },
  button: {
    backgroundColor: 'black',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    marginTop: 20,
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'Purple',
  },
});
