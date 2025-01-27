import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Button from '../Common/Button';
import {useNavigation} from '@react-navigation/native';

const Screen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.skipTest}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.skipTest}>Skip</Text>
      </Pressable>
      <Image
        source={require('../../Images/splash3.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Discovering New Personality</Text>
      <Text style={styles.text2}>
        Contrary to popular belief, Lorem Ipsum is not simply random text
      </Text>
      <Button
        text={'Next'}
        handler={() => {
          navigation.navigate('Screen4');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '80%',
    height: '30%',
    marginTop: '50%',
  },
  text: {
    fontSize: 24,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Bold',
    marginTop: '6%',
  },
  text2: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 16,
    width: '80%',
    marginBottom: '30%',
  },
  skipTest: {
    position: 'absolute',
    right: '10%',
    top: '10%',
    fontSize: 20,
  },
});

export default Screen3;
