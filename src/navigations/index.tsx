import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import AuthNavigator from './auth';
import AuthContext from '@contexts/auth';

const RootNavigator = () => {
  const { userId } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userId ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
