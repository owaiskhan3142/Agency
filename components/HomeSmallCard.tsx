import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React, {FC} from 'react';
import InputButton from '../components/inputButton';
import {wp, hp} from '../utils/helper';

interface SmallProps {
  title: string;
  photo: ImageSourcePropType;
}

const HomeCard: FC<SmallProps> = ({title, photo}) => {
  console.log(photo);
  return (
    <View>
      <TouchableOpacity
        style={{
          width: wp(100),
          height: hp(90),
        }}>
        <Image
          style={{width: wp(90), height: hp(60), borderRadius: 5}}
          source={photo}
        />
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
