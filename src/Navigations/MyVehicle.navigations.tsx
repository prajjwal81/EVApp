import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyVehiclesScreen from '../Screens/MyVehicle/MyVehicle';

const Stack = createNativeStackNavigator();

const MyVehicleStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyVehiclesScreen" component={MyVehiclesScreen} />
    </Stack.Navigator>
  );
};

export default MyVehicleStack;
