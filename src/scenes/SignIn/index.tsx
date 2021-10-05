import Button from '@components/Button';
import TextField from '@components/TextField';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {});
  auth().onAuthStateChanged(user => {
    Alert.alert(JSON.stringify(user));
  });

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
            classes={{ container: { marginTop: 10 } }}
            variant="contained"
            onPress={() => console.log(email, password)}>
            Entrar
          </Button>
          <Button
            classes={{
              container: { alignItems: 'center' },
            }}
            variant="text"
            onPress={() => navigation.navigate('SignUp' as never)}>
            Criar Conta
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
