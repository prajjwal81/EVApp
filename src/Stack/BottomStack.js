import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import HomeStack from '../Navigations/Home.navigations';
import MyVehicleStack from '../Navigations/MyVehicle.navigations';
import MoreStack from '../Navigations/More.navigations';
import SavedStack from '../Navigations/Saved.navigations';
import Scanner from '../Screens/Scanner/Scanner';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const removeBottomTab = useSelector(state => state.global.removeBottomTab);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(240, 247, 255, 1)',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainer}>
              <Icon
                name={focused ? 'location' : 'location-outline'}
                color={'black'}
                size={35}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View style={styles.labelContainer}>
              <Text style={styles.tabLabel}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MyVehicleStack"
        component={MyVehicleStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainer}>
              <Icon
                name={focused ? 'car' : 'car-outline'}
                color={'black'}
                size={40}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View style={styles.labelContainer}>
              <Text style={styles.tabLabel}>My Vehicle</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: 'rgba(123, 123, 123, 1)'},
              ]}>
              <MaterialIcons
                name={'document-scanner'}
                color={'white'}
                size={45}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SavedStack"
        component={SavedStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainer}>
              <Icon
                name={focused ? 'bookmark' : 'bookmark-outline'}
                color={'black'}
                size={30}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View style={styles.labelContainer}>
              <Text style={styles.tabLabel}>Saved</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainer}>
              <MaterialIcons
                name={focused ? 'view-headline' : 'view-headline'}
                color={'black'}
                size={40}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View style={styles.labelContainer}>
              <Text style={styles.tabLabel}>More</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: Platform.OS == 'android' ? '20%' : '40%',
    padding: 10,
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  tabLabel: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});
