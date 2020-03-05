import { StyleSheet } from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 32
  },
  title: {
    marginTop: 16
  },
  searchWrapper: {
    backgroundColor: 'transparent',
    marginTop: 24
  },
  searchInput: {
    backgroundColor: colors.lightgrey,
    borderRadius: 8
  }
});
