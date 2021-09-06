import Colors from '@styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  primary: {
    color: Colors.primary,
  },
  secondary: {
    color: Colors.secondary,
  },
  container: {
    padding: 16,
  },
  text: { fontSize: 16, fontWeight: '700' },
  disabled: {
    color: '#696969',
  },
});

export default styles;
