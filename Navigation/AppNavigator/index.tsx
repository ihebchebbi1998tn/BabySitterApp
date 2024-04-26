

import SignupScreen from "../../screens/SignupScreen";
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import PostScreen from '../../screens/PostScreen';
import ChatScreen from '../../screens/ChatScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen}  />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Home" component={HomeScreen}  />
    </Stack.Navigator>
  );
};

export default AppNavigator;
