import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@scenes/SignIn';
import SignUpScreen from '@scenes/SignUp';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  const options = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={options} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={options} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
