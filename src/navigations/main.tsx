import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@scenes/Home';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  const options = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
