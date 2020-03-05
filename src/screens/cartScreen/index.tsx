import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';
import CustomText from '../_components/CustomText';
import CartItem from './_components/CartItem';
import CustomButton from '../_components/CustomButton';

export default class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <CustomText text='My orders' bold style={styles.screenTitle} />
          <CustomText
            text='Welcome to your cart, preview items below'
            underneath
            style={{ marginBottom: 24 }}
          />

          <CartItem
            image={require('../../images/Bitmap.png')}
            price='2,000'
            ingredients='Beef, Veggies & Chilli'
            name='Cheese Burger'
          />

          <CartItem
            image={require('../../images/Bitmap(1).png')}
            price='2,070'
            ingredients='Extra Cheese & Toppings'
            name='Large Pizza'
          />

          <CartItem
            image={require('../../images/Bitmap(2).png')}
            price='3,500'
            ingredients='Sauce and Pepper'
            name='Grilled Turkey'
          />

          <CartItem
            image={require('../../images/Bitmap(3).png')}
            price='4,000'
            ingredients='Beef & Mutton'
            name='Peppersoup'
          />

          <View style={styles.totalSection}>
            <CustomText text='Total:' />
            <CustomText text={`\u20A6 20,000`} style={styles.totalAmount} />
          </View>
          <CustomButton label='CHECKOUT' style={styles.button} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
