import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const More = () => {
  const navigation = useNavigation();
  const handleEditProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handleChargeHistory = () => {
    console.log('Navigate to Charge History');
  };

  const handleHelp = () => {
    console.log('Navigate to Help');
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Kartik</Text>
          <Text style={styles.phone}>Phone: +91 2299348112</Text>
        </View>
        <TouchableOpacity onPress={handleEditProfile}>
          <Icon name="edit" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.menuItem} onPress={handleChargeHistory}>
        <Icon name="history" size={24} color="#000" />
        <Text style={styles.menuText}>Charge History</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleHelp}>
        <Icon name="help-outline" size={24} color="#000" />
        <Text style={styles.menuText}>Help</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Icon name="logout" size={24} color="red" />
        <Text style={[styles.menuText, {color: 'red'}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: '20%',
    paddingHorizontal: '5%',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: {
    fontSize: 14,
    color: '#6e6e6e',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
});

export default More;
