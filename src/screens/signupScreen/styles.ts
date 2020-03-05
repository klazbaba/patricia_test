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
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    padding: 16
  },
  notch: {
    width: 40,
    height: 5,
    backgroundColor: colors.lightgrey,
    borderRadius: 2,
    marginBottom: 16
  },
  defaultTitle: {
    marginTop: 16,
    fontWeight: '600'
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    color: colors.faintText
  },
  confirmButton: {
    backgroundColor: colors.lightOrange,
    alignSelf: 'stretch',
    marginTop: 32,
    elevation: 0
  },
  cancelText: {
    color: colors.orange,
    marginTop: 32
  }
});
