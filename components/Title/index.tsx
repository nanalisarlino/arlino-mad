import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  label: {
    fontSize: 40,
    color: '#FBF9E4',
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 0,
    alignItems: 'center',
    textShadowColor: '#021024', // Warna shadow
    textShadowOffset: {width: 2, height: 2}, // Arah bayangan
    textShadowRadius: 3,
  },
});
