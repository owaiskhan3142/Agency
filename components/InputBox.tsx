import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';

interface PictureInputProps {
  icon?: string;
}

export default function input() {
  return (
    <View>
      <TextInput
        style={styles.inputSmall}
        onChangeText={setLast}
        value={last}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
  },
});
