import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../Screens/MyVehicle/MyVehicle';
import Login from '../Screens/Auth/Login';
import OTP from '../Screens/Auth/Otp';
import VehicleRegistration from '../Screens/Auth/VehicleRegistration';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Screen1" component={Screen1} /> */}

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen
        name="VehicleRegistration"
        component={VehicleRegistration}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
