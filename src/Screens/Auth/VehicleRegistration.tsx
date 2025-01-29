import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {addVehicle} from '../../../api/vehicle';

export default function VehicleRegistration() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const onSubmitHandler = async () => {
    try {
      const res = await addVehicle(model, manufacturer, vehicleNumber);
      if (res.success) {
        Alert.alert('Sucess', 'Congrats Vehicle Added Successfully');
      }
    } catch (error) {
      if (error.status === 409) {
        Alert.alert('Error', 'Vehicle Already Exists');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/Ev2.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Add Vehicle</Text>

      <Text style={styles.text2}>Manufacturer</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Manufacture Number"
        value={manufacturer}
        onChangeText={setManufacturer}
        placeholderTextColor={'black'}
      />

      <Text style={styles.text2}>Model</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Model"
        value={vehicleNumber}
        onChangeText={setVehicleNumber}
        placeholderTextColor={'black'}
      />

      <Text style={[styles.text2, {fontSize: 18}]}>
        Vehicle Registration Number
      </Text>
      <TextInput
        style={styles.input2}
        placeholder="HR 12 QQ ABCD"
        value={model}
        onChangeText={setModel}
        placeholderTextColor={'grey'}
      />

      <Pressable style={styles.btnContainer} onPress={onSubmitHandler}>
        <Text style={styles.btnTxt}>Save Vehicle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  next: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  text: {
    fontSize: 25,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Bold',
    marginTop: '10%',
    marginLeft: '5%',
  },
  text2: {
    fontSize: 18,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Medium',
    marginTop: '4%',
    marginLeft: '10%',
  },
  input: {
    padding: 20,
    backgroundColor: 'rgba(234, 243, 255, 1)',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
    paddingVertical: '6%',
    borderRadius: 15,
  },
  input2: {
    padding: 20,
    width: '85%',
    alignSelf: 'center',
    marginTop: '5%',
    paddingVertical: '4%',
    borderColor: 'rgba(53, 194, 193, 1)',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: 'rgba(12, 113, 255, 1)',
    padding: 18,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
  },
  btnTxt: {
    color: '#FFFFFF',
  },
});
