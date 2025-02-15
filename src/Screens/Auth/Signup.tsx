import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {register} from '../../../api/auth';
import {setItem} from '../../utils/asyncStorage';
import {setLoginOrNot} from '../../../Redux/Global/Global';
import {useDispatch} from 'react-redux';

export default function Signup() {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const onSignupHandler = async (number: string) => {
    try {
      const res = await register(number);

      if (res.message === 'Signup successful') {
        await setItem('user', res.user);
        await setItem('token', res.token);
        if (!res.isVerified) navigation.navigate('OTP');
        else {
          dispatch(setLoginOrNot(true));
        }
      }
    } catch (error) {
      console.log('InLoginhandler', JSON.stringify(error.status));
      if (error.status === 409) {
        Alert.alert(
          'Error',
          'User Already Exists Try out with other phone Number',
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/EV.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Hello! Register to get started</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Number"
        value={number}
        onChangeText={setNumber}
      />

      <Pressable
        style={[
          styles.input,
          {backgroundColor: 'rgba(12, 113, 255, 1)', borderRadius: 15},
        ]}
        onPress={() => {
          onSignupHandler(number);
        }}>
        <Text style={styles.next}>Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
    left: '3%',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    fontFamily: 'Poppins',
    letterSpacing: 0.4,
    left: '3%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    padding: 20,
    backgroundColor: 'rgba(234, 243, 255, 1)',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  icon: {
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  next: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  text: {
    fontSize: 30,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Bold',
    marginTop: '10%',
    alignSelf: 'center',
  },
  skipTest: {
    position: 'absolute',
    right: '10%',
    top: '10%',
    fontSize: 20,
  },

  loginText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: '5%',
  },
  loginLink: {
    color: '#f57c00',
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '30%',
  },
});
