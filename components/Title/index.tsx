import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({label, customStyles = {}}) => {
  return (
    <View>
      <Text style={[styles.label, customStyles]}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  label: {
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
    color: '#000', // Default color
  },
});
