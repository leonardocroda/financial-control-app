import Button from '@components/Button';
import TextField from '@components/TextField';
import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#F2F2F2',
          flex: 1,
          justifyContent: 'center',
          padding: 16,
        }}>
        <View
          style={{
            borderRadius: 24,
            height: 220,
            padding: 24,
            backgroundColor: Colors.white,
            justifyContent: 'space-between',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.2,
          }}>
          <TextField
            variant="standard"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            label="E-mail"
          />
          <TextField
            isPassword
            variant="standard"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            label="Senha"
          />
          <Button
            variant="contained"
            onPress={() => Alert.alert(email, password)}>
            Entrar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
