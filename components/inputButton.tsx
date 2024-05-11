import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  type TouchableOpacityProps,
  Button,
} from 'react-native';
import React, {FC} from 'react';
import {wp, hp} from '../utils/helper';

interface InputButtonProps extends TouchableOpacityProps {
  title: string;
  bgcolor?: string;
}

const InputButton: FC<InputButtonProps> = ({title, bgcolor, ...props}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: hp(10),
          borderRadius: 20,
          backgroundColor: bgcolor,
          height: hp(40),
          paddingVertical: 10,
          paddingHorizontal: 20,
          // width: '100%',
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
