import Button from '@components/Button';
import TextField from '@components/TextField';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import AuthContext from '@contexts/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

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
            onPress={() => signIn(email, password)}>
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
