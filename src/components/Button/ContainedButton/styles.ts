import Colors from '@styles/colors';
import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
  },
  primary: { backgroundColor: Colors.primary, shadowColor: Colors.primary },
  secondary: {
    backgroundColor: Colors.secondary,
    shadowColor: Colors.secondary,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
});

export const textStyles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  primary: {
    color: Colors.white,
  },
  secondary: {
    color: Colors.white,
  },
});
