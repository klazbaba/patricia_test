import React from 'react';
import { Button } from 'native-base';
import { StyleSheet } from 'react-native';

import CustomText from './CustomText';
import { colors } from '../../colors';

interface Props {
  label: string;
  style?: object;
}

export default function CustomButton(props: Props) {
  return (
    <Button style={[styles.wrapper, props.style]}>
      <CustomText text={props.label} style={styles.label} />
    </Button>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 8
  },
  label: {
    color: colors.white
  }
});
