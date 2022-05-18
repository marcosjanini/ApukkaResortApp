import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import HomeScreen from './HomeScreen';  
import Activities from './Activities';
import Rooms from './Rooms';
import Location from './Location';


const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'md-home';
    } else if (route.name === 'Activities') {
      iconName = 'bicycle-outline';
    } else if (route.name === 'Location') {
      iconName = 'navigate-circle-outline';
    } else if (route.name === 'Rooms') {
      iconName = 'bed-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Rooms" component={Rooms} />
        <Tab.Screen name="Activities" component={Activities} />
        <Tab.Screen name="Location" component={Location} />
       </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});