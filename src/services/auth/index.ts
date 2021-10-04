import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const createUser = (email: string, password: string) => {
  try {
    auth().createUserWithEmailAndPassword(email, password);

    Alert.alert('Usuário criado com sucesso');
  } catch (error) {
    Alert.alert(error as string);
  }
};

export const signIn = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => Alert.alert('signed'))
    .catch(_ => Alert.alert('Usuário ou senha incorretos'));
};
