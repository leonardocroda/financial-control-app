import Button from '@components/Button';
import styles from './styles';
import TextField from '@components/TextField';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { createUser } from '@services/auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.card}>
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
            onPress={() => {
              createUser(email, password);
              navigation.navigate('SignIn' as never);
            }}>
            Criar Conta
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
