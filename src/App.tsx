import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';

const AuthenticationStack = createStackNavigator(
  {
    LoginScreen,
    SignupScreen
  },
  {
    headerMode: 'none'
  }
);

const Routes = createAppContainer(AuthenticationStack);

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
