import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from './components/Input';
import {MainButton, ButtonCustom} from './components/Button';
import Title from './components/Title';

const Signin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Title label="Welcome" />
        <Input label="Username" placeholder="Masukan username anda" />
        <Input label="Password" placeholder="Masukan password anda" />
        <MainButton label="Sign In" />
      </View>
      <Text style={styles.atau}>Or</Text>
      <ButtonCustom label="Sign In With Google" color="red" />
      <ButtonCustom label="Sign In With FaceBook" color="blue" />
      <ButtonCustom label="Sign In With Apple" color="black" />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Bawa semua elemen ke atas
    alignItems: 'center',
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#052659',
  },
  box: {
    width: '85%', // Sesuaikan lebar
    padding: 30,
    backgroundColor: '#5483B3',
    borderRadius: 30,
    shadowColor: '#021024',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  atau: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 15,
  },
});
