import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  TextInputProps,
} from 'react-native';
import React, {FC} from 'react';
import {wp, hp} from '../utils/helper';

interface InputButtonProps extends TextInputProps {
  placeholder?: string;
  border?: number;
}

const InputBox: FC<InputButtonProps> = ({placeholder, border, ...props}) => {
  return (
    <View>
      <TextInput
        style={{
          borderColor: 'black',
          marginTop: hp(20),
          borderWidth: 1,
          padding: 10,
          borderRadius: border,
          // marginBottom: hp(20),
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
