import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const UnivertasKLabat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF0000" barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerBoxContainer}>
          <View style={styles.blackSquare1} />
          <View style={styles.yellowSquare1} />
          <View style={styles.blackSquare2} />
        </View>
      </View>

      <View style={styles.content}>
        <Image
          source={require('./assets/unklab_logo.png')}
          style={styles.logoWithText}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.blackSquare3} />
        <View style={styles.yellowSquare2} />
        <View style={styles.blackSquare4} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 100,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  footer: {
    height: 100,
    backgroundColor: '#0000FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  blackSquare1: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    marginHorizontal: 10,
  },
  blackSquare2: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    marginHorizontal: 10,
  },
  blackSquare3: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    marginRight: 70,
  },
  blackSquare4: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    marginLeft: 70,
  },
  yellowSquare1: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFF00',
    marginHorizontal: 0,
  },
  yellowSquare2: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFF00',
    marginHorizontal: 10,
  },
  logoWithText: {
    width: 400,
    height: 400,
  },
});

export default UnivertasKLabat;
