import { Text, StyleSheet, TextProperties } from 'react-native';
import React, { ReactElement } from 'react';

interface Props extends TextProperties {
  text: string;
  bold?: boolean;
  underneath?: boolean;
  style?: object;
  children?: ReactElement;
}

export default function CustomText(props: Props) {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.bold ? { fontWeight: 'bold', fontSize: 30 } : null,
        props.underneath ? { fontSize: 12 } : null,
        props.style
      ]}
    >
      {props.text}
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});
