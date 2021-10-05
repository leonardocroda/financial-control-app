import React, { createContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthContextData {
  userId: string | null;
  signIn: Function;
  signOut: Function;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const getUid = async () => {
    const uid = await AsyncStorage.getItem('uid');
    console.log(uid);
    setUserId(uid);
  };

  useEffect(() => {
    getUid();
  }, []);

  async function signIn(email: string, password: string) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        onLogin(user.user);
      })
      .catch(err => console.error(err));
  }

  async function onLogin(user: any) {
    if (user) {
      await AsyncStorage.setItem('uid', user.uid);
      setUserId(user);
    }
  }

  async function onLogout() {
    await AsyncStorage.removeItem('uid');
    setUserId(null);
  }

  async function signOut() {
    auth()
      .signOut()
      .then(() => onLogout())
      .catch(err => console.error(err));
  }

  return (
    <AuthContext.Provider value={{ userId, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
