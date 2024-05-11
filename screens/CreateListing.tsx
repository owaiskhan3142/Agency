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
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import {wp, hp} from '../utils/helper';
import InputButton from '../components/inputButton';
import Nav from '../components/Nav';
import InputBox from '../components/InputBox';

const options = {
  mediaType: 'photo',
  quality: 1,
};
const CreateListing = () => {
  const [username, setUsername] = React.useState('');
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handelImage = () => {
    console.log('I am pressed');
    launchImageLibrary(
      {mediaType: 'photo'},
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          console.log('Selected image URI:', response.assets?.[0]?.uri);
        }
        console.log(response.assets?.[0]?.uri);
      },
    );
  };
  return (
    <KeyboardAvoidingView>
      <Nav page={'Create Listing'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <InputBox placeholder="Email" border={50} />
        <InputBox placeholder="Name" border={50} />
        <InputBox placeholder="Phone" border={50} />
        <InputBox placeholder="Company name" border={50} />
        <InputBox placeholder="Website URL" border={50} />
        <TouchableOpacity onPress={handelImage}>
          <Text>Touch me</Text>
        </TouchableOpacity>
        <InputButton
          title={'Submit'}
          bgcolor="black"
          onPress={() => {
            console.log('Press me');
          }}
        />
        <InputBox
          placeholder="Address (Street, City, Zip or Code)"
          border={50}
        />
        <InputBox placeholder="Industry" border={50} />
        <InputBox placeholder="City" border={50} />
        <InputBox placeholder="Industry your company represents" border={50} />
        <InputButton title={'Submit'} bgcolor="black" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateListing;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    marginTop: hp(10),
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    marginBottom: hp(20),
  },

  main: {
    marginLeft: wp(30),
    marginRight: wp(30),
    marginBottom: hp(60),
    color: 'black',
  },
});
