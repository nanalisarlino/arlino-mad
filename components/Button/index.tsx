import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MainButton = ({label}) => {
  return (
    <TouchableOpacity style={styles.buttonsignin}>
      <Text style={styles.Textbiasa}>{label}</Text>
    </TouchableOpacity>
  );
};

const ButtonCustom = ({label, color}) => {
  return (
    <TouchableOpacity style={styles.buttoncustom(color)}>
      <Text style={styles.Textcustom}>{label}</Text>
    </TouchableOpacity>
  );
};

export {MainButton, ButtonCustom};

const styles = StyleSheet.create({
  buttoncustom: color => ({
    backgroundColor: color,
    padding: 15,
    paddingVertical: 15, // Atur padding atas & bawah
    borderRadius: 15,
    width: 200,
    alignItems: 'center',
    margin: 10,
  }),
  buttonsignin: {
    backgroundColor: '#021024',
    padding: 18,
    alignItems: 'center',
    borderRadius: 15,
  },
  Textbiasa: {
    color: '#FBF9E4',
    fontSize: 20,
  },
  Textcustom: {
    color: '#FBF9E4',
    fontSize: 13,
  },
});
