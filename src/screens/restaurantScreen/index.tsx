import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

import { styles } from './styles';
import CustomText from '../_components/CustomText';

export default class RestaurantScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
          <CustomText text='Hello, John' bold style={styles.title} />
          <CustomText text='Select your meal for the day' underneath />

          <Header searchBar style={styles.searchWrapper}>
            <Item style={styles.searchInput}>
              <Icon name='search' />
              <Input placeholder='Search for meals, dishes' />
            </Item>
          </Header>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
