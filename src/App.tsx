import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import CartScreen from './screens/cartScreen';
import RestaurantScreen from './screens/restaurantScreen';

const AuthenticationStack = createStackNavigator(
  {
    LoginScreen,
    SignupScreen
  },
  {
    headerMode: 'none'
  }
);

const MainAppStack = createStackNavigator(
  {
    CartScreen,
    RestaurantScreen
  },
  {
    headerMode: 'none'
  }
);

const AppStack = createSwitchNavigator({ AuthenticationStack, MainAppStack });
const Routes = createAppContainer(AppStack);

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
