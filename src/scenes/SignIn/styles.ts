import Colors from '@styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  screen: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    borderRadius: 24,
    height: 240,
    padding: 24,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
});

export default styles;
