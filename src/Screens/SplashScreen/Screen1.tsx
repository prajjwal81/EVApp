import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Button from '../Common/Button';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
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
        source={require('../../Images/EV.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Hello! Register to get started</Text>
      <Button
        text={'Next'}
        handler={() => {
          navigation.navigate('Screen2');
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
    width: '100%',
    height: '60%',
  },
  text: {
    fontSize: 24,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Bold',
    marginTop: '10%',
  },
  skipTest: {
    position: 'absolute',
    right: '10%',
    top: '10%',
    fontSize: 20,
  },
});

export default Screen1;
