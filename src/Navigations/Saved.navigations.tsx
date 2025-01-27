import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyVehiclesScreen from '../Screens/MyVehicle/MyVehicle';
import Saved from '../Screens/Saved/Saved';

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyVehiclesScreen" component={Saved} />
    </Stack.Navigator>
  );
};

export default SavedStack;
