import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {FC} from 'react';
import {wp, hp} from '../utils/helper';

interface InputButtonProps {
  title: string;
  bgcolor?: string;
}

const InputButton: FC<InputButtonProps> = ({title, bgcolor}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: hp(10),
          borderRadius: 20,
          backgroundColor: bgcolor,
          height: hp(50),
          paddingVertical: 10,
          paddingHorizontal: 20,
          width: '100%',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
            flex: 1,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputButton;

const styles = StyleSheet.create({});
