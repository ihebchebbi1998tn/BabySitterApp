import React from "react";
import LoginScreen from "../../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../../screens/ForgotPassword";
import CodeVerificationScreen from "../../screens/ForgotPassword2";
import ForgotPasswordScreen3 from "../../screens/ForgotPassword3";
import SignupForm from "../../screens/SignupScreen/SignupForm";
import HomeScreen from "../../screens/HomeScreen";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUp" component={SignupForm} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotPassword2" component={CodeVerificationScreen} />
      <Stack.Screen name="ForgotPassword3" component={ForgotPasswordScreen3} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
