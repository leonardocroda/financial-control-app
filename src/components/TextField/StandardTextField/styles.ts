import Colors from '@styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { height: 54 },
  inputContainer: {
    height: 48,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingLeft: 8,
  },
  label: {
    textTransform: 'uppercase',
    color: Colors.primary,
    margin: 0,
  },
  input: { height: 28, fontSize: 16, padding: 0 },
  containerError: {
    borderBottomColor: Colors.red,
  },
  labelError: {
    color: Colors.red,
  },
  errorMessage: {
    color: Colors.red,
    marginLeft: 8,
  },
});

export default styles;
