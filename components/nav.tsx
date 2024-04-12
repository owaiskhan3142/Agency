import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {wp, hp} from '../utils/helper';
import InputButton from './inputButton';
import {text} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faBorderAll,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

interface navProps {
  isSearch?: boolean;
  page: string;
  photo?: ImageSourcePropType;
}

const Nav: FC<navProps> = ({isSearch, page}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.navBtn}>
        <FontAwesomeIcon icon={faChevronLeft as IconProp} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>{page}</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  main: {
    height: hp(100),
    backgroundColor: 'black',
    // paddingTop: hp(30),
    borderEndEndRadius: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center', //Centered horizontally
  },
  text: {
    color: 'white',
    marginLeft: wp(100),
    fontSize: 26,
  },
  navBtn: {
    marginLeft: wp(20),
  },
});
