import React from 'react';
import { Button, NativeBase } from 'native-base';
import { StyleSheet } from 'react-native';

import CustomText from './CustomText';
import { colors } from '../../colors';

interface Props extends NativeBase.Button {
  label: string;
  style?: object;
  labelStyle?: object
}

export default function CustomButton(props: Props) {
  return (
    <Button {...props} style={[styles.wrapper, props.style]}>
      <CustomText text={props.label} style={[styles.label, props.labelStyle]} />
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
