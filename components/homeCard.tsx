import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import InputButton from '../components/inputButton';
import {wp, hp} from '../utils/helper';
import {faPhp} from '@fortawesome/free-brands-svg-icons';

interface HomeProps {
  photo: Array<string>;
  title: string;
  description: string;
  review: number;
}

const HomeCard: FC<HomeProps> = ({photo, title, description, review}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const renderNumber = photo.length - 4;
  console.log(renderNumber);

  return (
    <SafeAreaView
      style={{
        padding: 20,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: wp(170),
            height: hp(120),
            borderRadius: 5,
            paddingRight: 15,
            marginRight: 5,
          }}
          source={require('../assets/plumber.jpg')}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginRight: 5,
            }}>
            <Image
              style={{
                width: wp(80),
                height: hp(60),
                borderRadius: 5,
                marginBottom: 5,
              }}
              source={require('../assets/plumber.jpg')}
            />
            <Image
              style={{width: wp(80), height: hp(60), borderRadius: 5}}
              source={require('../assets/plumber.jpg')}
            />
          </View>
          <View>
            <Image
              style={{width: wp(80), height: hp(60), borderRadius: 5}}
              source={require('../assets/plumber.jpg')}
            />
            <Text
              style={{
                fontSize: 30,
                alignItems: 'center',
                textAlign: 'center',
                marginTop: hp(8),
                color: 'black',
              }}>
              {'+' + renderNumber}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(10),
        }}>
        <View>
          <Text style={{color: 'black'}}>{title}</Text>
          <Text style={{color: 'black'}}>{description}</Text>
          <Text style={{color: 'black'}}>{review} Reviews</Text>
        </View>
        <View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'green',
                paddingHorizontal: wp(20),
                borderRadius: 50,
              }}>
              Open
            </Text>
            {/* <Text style={{color: 'black'}}>$$$</Text> */}
          </View>
        </View>
      </View>
      {/* <InputButton title={'Direction'} bgcolor="black" /> */}
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
          }}>
          Direction
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  paddingAll: {
    padding: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    paddingVertical: hp(6),
  },
});
