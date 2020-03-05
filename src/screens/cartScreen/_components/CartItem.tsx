import React from 'react';
import { View, ImageSourcePropType, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base';

import CustomText from '../../_components/CustomText';
import { colors } from '../../../colors';

interface Props {
  name: string;
  ingredients: string;
  price: string;
  image: ImageSourcePropType;
}

export default function CartItem(props: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.nameSection}>
        <CustomText text={props.name} style={styles.name} />
        <CustomText text={props.ingredients} underneath />
      </View>
      <CustomText text={`\u20A6 ${props.price}`} style={styles.price} />
      <Icon name='delete-circle' type='MaterialCommunityIcons' style={styles.trash} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  image: {
    marginRight: 16,
    borderRadius: 8
  },
  nameSection: {
    marginRight: 16,
    width: 120
  },
  price: {
    flex: 1
  },
  name: {
    fontWeight: 'bold'
  },
  trash: {
    fontSize: 32,
    color: colors.orange
  }
});
