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
    color: '#021024',
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 0,
    alignItems: 'center',
  },
});
