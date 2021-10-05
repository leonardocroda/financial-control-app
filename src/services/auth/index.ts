import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const createUser = (email: string, password: string) => {
  try {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user =>
        user.user.sendEmailVerification().then(() => {
          Alert.alert(
            `Foi enviado um e-mail de verificação para ${user.user.email}`,
          );
        }),
      );
  } catch (error) {
    Alert.alert(error as string);
  }
};
