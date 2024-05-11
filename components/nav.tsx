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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faBorderAll,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import InputBox from './InputBox';

interface navProps {
  isSearch?: boolean;
  page: string;
  photo?: ImageSourcePropType;
  navigation?: any;
}

const Nav: FC<navProps> = ({isSearch, page, navigation}) => {
  return (
    <View>
      {page == 'Home' ? (
        <View style={styles.main}>
          <InputBox style={{backgroundColor: 'white'}} />
          <Text style={styles.text}>{page}</Text>
        </View>
      ) : (
        <View style={styles.main}>
          <TouchableOpacity style={styles.navBtn}>
            <FontAwesomeIcon icon={faChevronLeft as IconProp} color="white" />
          </TouchableOpacity>
          <Text style={styles.text}>{page}</Text>
        </View>
      )}
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  HomeNav: {
    height: hp(100),
    backgroundColor: 'black',
    borderEndEndRadius: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    height: hp(100),
    backgroundColor: 'black',
    borderEndEndRadius: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 26,
  },
  navBtn: {
    marginLeft: wp(20),
  },
});
