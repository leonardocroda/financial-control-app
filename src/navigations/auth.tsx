import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@scenes/SignIn';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  const options = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={options} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
