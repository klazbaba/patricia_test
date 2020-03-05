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
  forgotPasswordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12
  },
  loginButton: {
    marginTop: 56
  },
  rememberMeWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    marginRight: 8,
    borderWidth: 0.5,
    width: 12,
    height: 12,
    borderRadius: 6
  },
  signUpText: {
    marginTop: 32,
    textAlign: 'center'
  }
});
