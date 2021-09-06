/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Button from '@components/Button';
import TextField from '@components/TextField';
import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <TextField
          variant="standard"
          value={inputValue}
          onChangeText={text => {
            setInputValue(text);
          }}
          label="teste"
        />
        <Button onPress={() => Alert.alert('teste')}>teste</Button>
        <Button variant="contained" onPress={() => Alert.alert('teste')}>
          teste
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
