import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const CheckoutScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Charging station name</Text>
          <Text style={styles.value}>Sarita Vihar, Delhi</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>45 Min</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>INR 1000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tax</Text>
          <Text style={styles.value}>INR 20</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.total}>Total</Text>
          <Text style={[styles.value, styles.total]}>INR 1020</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PaymentSuccessScreen')}>
        <Text style={styles.buttonText}>Continue to Pay</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.goBack()} style={styles.cancelText}>
        Cancel Payment
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff', paddingTop: '20%'},
  heading: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {fontSize: 16, color: '#555'},
  value: {fontSize: 16, fontWeight: 'bold'},
  total: {fontSize: 18, color: '#000'},
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  cancelText: {color: '#555', textAlign: 'center', marginTop: 10},
});

export default CheckoutScreen;
