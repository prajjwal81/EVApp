import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getVehicle} from '../../../api/vehicle';

const Child = ({onClick}) => {
  return (
    <Pressable
      onPress={() => {
        onClick();
      }}>
      <Text></Text>
    </Pressable>
  );
};

const MyVehiclesScreen = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const navigation = useNavigation();
  const [vehicles, setVehicles] = useState([
    {
      id: '1',
      brand: 'Mahindra',
      model: 'XUV 400',
      registration: 'HR 12 QQ ABCD',
    },
    {
      id: '2',
      brand: 'Mahindra',
      model: 'XUV 400',
      registration: 'HR 12 QQ ABCD',
    },
  ]);
  console.log('===>', vehicles);

  const handleVehiclePress = useCallback((id: string) => {
    setSelectedVehicle(id);
  }, []);

  useEffect(() => {
    (async function getVehicleData() {
      const res = await getVehicle();
      setVehicles(res);
    })();
  }, []);

  const renderVehicle = ({item}: any) => {
    const isSelected = selectedVehicle === item.id;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => handleVehiclePress(item.id)}>
        <View>
          <Text style={styles.brand}>{item.manufacture}</Text>
          <Text style={styles.model}>{item.model}</Text>
          <Text style={styles.registration}>
            {item.vehicleRegistrationNumber}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#0057FF" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '10%',
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
        <Text style={styles.title}>My Vehicles</Text>
      </View>
      <FlatList
        data={vehicles}
        renderItem={renderVehicle}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      <Child onClick={handleVehiclePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    marginLeft: '18%',
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#0057FF',
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  model: {
    fontSize: 14,
    color: '#555555',
  },
  registration: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#0057FF',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default MyVehiclesScreen;
