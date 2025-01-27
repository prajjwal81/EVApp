import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentSuccessScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons
        name="checkmark-circle"
        size={80}
        color="#20b32F"
        style={styles.icon}
      />
      <Text style={styles.heading}>Payment Success!</Text>
      <Text style={styles.subheading}>
        Your payment has been successfully done.
      </Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>INR 1020</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Status</Text>
          <Text style={[styles.value, styles.success]}>Success</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ref Number</Text>
          <Text style={styles.value}>000085752257</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Method</Text>
          <Text style={styles.value}>UPI Transfer</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Time</Text>
          <Text style={styles.value}>Jan 24, 2024, 15:32:16</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sender</Text>
          <Text style={styles.value}>Antonio Ibrahimovic</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Charge your vehicle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '20%',
  },
  icon: {marginBottom: 20},
  heading: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  subheading: {fontSize: 16, color: '#555', marginBottom: 20},
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {fontSize: 16, color: '#555'},
  value: {fontSize: 16, fontWeight: 'bold'},
  success: {color: '#20b32F'},
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});

export default PaymentSuccessScreen;
