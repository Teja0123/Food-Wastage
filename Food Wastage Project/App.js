import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './logins/LoginScreen';
import StudentHome from './logins/StudentHome';
import MenuScreen from "./menu/MenuScreen"
import PreOrderScreen from './preorderscreen/preorder';
import AdminHome from './logins/AdminHome';
import DashboardScreen from './DashboardScreen';
import HallStatusScreen from './HallStatusScreen';
import FeedbackForm from './feedback';
// import FeedbackForm from './feedback';
// import FineScreen from '../screens/FineScreen';
// import FeedbackScreen from '../screens/FeedbackScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="PreOrderScreen" component={PreOrderScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="HallStatusScreen" component={HallStatusScreen} />
        <Stack.Screen name="FeedbackForm" component={FeedbackForm} />
        {/* <Stack.Screen name="FineScreen" component={FineScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};



