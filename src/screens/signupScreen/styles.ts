import { StyleSheet } from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 32,
    justifyContent: 'center'
  },
  logInToYourAccount: {
    marginTop: 8
  },
  backgroundImage: {
    position: 'absolute',
    top: 32,
    right: 0
  },
  formWrapper: {
    marginTop: 32
  },
  formInput: {
    paddingLeft: 0,
    left: 0,
    paddingBottom: 8
  },
  formItem: {
    marginLeft: 0
  },
  checkIcon: {
    color: colors.green,
    marginBottom: 8
  },
  signUpButton: {
    marginTop: 56
  },
  signInText: {
    marginTop: 32,
    textAlign: 'center'
  }
});
