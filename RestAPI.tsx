// RestAPI.js
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Account from './components/userlist';
import Title from './components/Title';

const RestAPI = () => {
  return (
    <View style={styles.container}>
      <Title label="Users List" />
      <Account />
    </View>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
