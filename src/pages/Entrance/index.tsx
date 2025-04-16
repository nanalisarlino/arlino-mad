import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const Entrance = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Money Tracker</Text>
    </View>
  );
};

export default Entrance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
});
