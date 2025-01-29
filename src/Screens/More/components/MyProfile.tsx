import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getItem} from '../../../utils/asyncStorage';
import {getProfile, setProfile} from '../../../../api/profile';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    (async function getDataFromLocalStorage() {
      const res = await getItem('user');
      setPhone(res.phoneNumber);
    })();

    (async function getProfileData() {
      const res = await getProfile();
      if (
        Array.from(Object.keys(res.user)).includes('name') ||
        Array.from(Object.keys(res.user)).includes('email')
      ) {
        setName(res.user.name);
        setEmail(res.user.email);
      }
    })();
  }, []);

  const submitHandler = async (
    name: string,
    email: string,
    phoneNumber: string,
  ) => {
    try {
      const res = await setProfile(name, email, phoneNumber);
      console.log(res);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: '10%',
        }}>
        <Ionicons
          name="chevron-back"
          size={32}
          color="black"
          style={{marginRight: '10%'}}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <Text style={styles.header}>Profile</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.rowInput}>
          <View style={styles.flagContainer}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png',
              }}
              style={styles.flag}
            />
            <Text style={styles.countryCode}>+91</Text>
          </View>
          <TextInput
            style={[styles.input, {flex: 1}]}
            placeholder="2299348112"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            editable={false}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => submitHandler(name, email, phone)}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '25%',
    // marginBottom: 24,
  },
  fieldContainer: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 16,
    color: '#333',
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#dce7ff',
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#3366ff',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
