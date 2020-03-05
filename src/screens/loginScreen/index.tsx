import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Form, Item, Label, Input, Icon } from 'native-base';

import { styles } from './styles';
import CustomText from '../_components/CustomText';
import { colors } from '../../colors';
import CustomButton from '../_components/CustomButton';

interface Props {
  navigation: any;
}

interface State {
  rememberMe: boolean;
}

export default class LoginScreen extends Component<Props> {
  state: State = {
    rememberMe: false
  };

  toggleRememberMe = () => this.setState({ rememberMe: !this.state.rememberMe });

  render() {
    const { rememberMe } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <CustomText text='Welcome Back!' bold />
          <CustomText text='Login to your account' style={styles.logInToYourAccount} />
          <Form style={styles.formWrapper}>
            <Item
              floatingLabel
              underline
              style={[styles.formItem, { borderBottomColor: colors.orange }]}
            >
              <Label>Username</Label>
              <Input style={styles.formInput} />
              <Icon name='checkmark-circle' style={styles.checkIcon} />
            </Item>

            <Item floatingLabel underline style={styles.formItem}>
              <Label>Password</Label>
              <Input style={styles.formInput} />
            </Item>
          </Form>

          <View style={styles.forgotPasswordRow}>
            <TouchableOpacity style={styles.rememberMeWrapper} onPress={this.toggleRememberMe}>
              <View
                style={[
                  styles.circle,
                  rememberMe ? { backgroundColor: colors.orange, borderWidth: 0 } : null
                ]}
              />
              <CustomText text='Remember me' underneath />
            </TouchableOpacity>
            <CustomText text='Forgot Password?' underneath style={{ color: colors.orange }} />
          </View>

          <CustomButton label='LOGIN' style={styles.loginButton} />
          <CustomText text='New user?' style={styles.signUpText}>
            <CustomText text=' Signup' style={{ color: colors.orange }} />
          </CustomText>

          <Svg
            width={199}
            height={220}
            viewBox='0 0 199 220'
            fill='none'
            {...this.props}
            style={styles.backgroundImage}
          >
            <Path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M178.389 69.11a33.07 33.07 0 0125.326 3.19h.11c15.301 9.073 20.657 28.621 12.113 44.211C179.708 180.324 111.993 219.828 38.544 220h-6.387c-17.9-.477-32.16-15.11-32.153-32.993-.212-14.053 8.69-26.632 22.023-31.124V11.042a10.996 10.996 0 015.615-9.569 11.023 11.023 0 0111.012 0L166.387 75.27a31.942 31.942 0 0112.002-6.159zM60.677 77.028c0-6.074 4.93-10.997 11.011-10.997 6.082 0 11.012 4.923 11.012 10.997s-4.93 10.998-11.012 10.998c-6.081 0-11.011-4.924-11.011-10.998zm0 49.271c0-6.074 4.93-10.998 11.011-10.998 6.082 0 11.012 4.924 11.012 10.998 0 6.074-4.93 10.997-11.012 10.997-6.081 0-11.011-4.923-11.011-10.997zm49.441-38.273c-6.081 0-11.011 4.924-11.011 10.998v10.998c0 6.074 4.93 10.998 11.011 10.998 6.082 0 11.012-4.924 11.012-10.998V99.024c0-6.074-4.93-10.998-11.012-10.998zM44.049 30.068l108.904 62.797c-24.503 36.517-64.933 59.218-108.904 61.148V30.068zM33.038 198.004c67.46 1.832 130.43-33.653 163.74-92.271h.11c2.679-5.322.629-11.807-4.625-14.627a11.022 11.022 0 00-8.258-.99 9.911 9.911 0 00-6.387 4.839c-28.305 50.062-81.4 81.03-138.964 81.054h-5.616a11.022 11.022 0 00-7.708 3.079 10.991 10.991 0 00-3.303 7.919c0 6.073 4.93 10.997 11.011 10.997z'
              fill='#F9E1DA'
              fillOpacity={0.192}
            />
          </Svg>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
