/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './navigations';
import appReducer from './store';

const App = () => {
  return (
    <Provider store={appReducer}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
