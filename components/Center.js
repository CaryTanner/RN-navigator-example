import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Center(props) {
  return (
    <View style={{...styles.center, ...props.style}}>{props.children}</View>
  );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
