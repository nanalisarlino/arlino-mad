import React from 'react';
import {StyleSheet, View} from 'react-native';

const Spasi = ({height}) => {
  return <View style={styles.Spasi(height)} />;
};

export default Spasi;

const styles = StyleSheet.create({
  Spasi: height => ({
    height: height,
  }),
});
