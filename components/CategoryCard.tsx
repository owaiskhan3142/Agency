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
import {wp, hp} from '../utils/helper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleRight,
  faBorderAll,
} from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  photo: ImageSourcePropType;
}

const HomeCard: FC<CardProps> = ({title, photo}) => {
  return (
    <View style={{marginBottom: hp(40), height: hp(200)}}>
      <Image
        style={{
          width: '100%',
          height: hp(200),
          borderRadius: 5,
          position: 'absolute',
        }}
        source={photo}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(150),
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 34,
            marginStart: wp(20),
          }}>
          {title}
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', marginRight: wp(20)}}>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight as IconProp}
            size={30}
            color="white"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  arrow: {
    borderRadius: 50,
    width: 50,
  },
});
