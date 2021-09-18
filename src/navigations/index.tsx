import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import AuthNavigator from './auth';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
