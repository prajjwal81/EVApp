import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../Screens/MyVehicle/MyVehicle';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Saved/Saved';
import More from '../Screens/More/More';
import ProfileScreen from '../Screens/More/components/MyProfile';

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={More} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MoreStack;
