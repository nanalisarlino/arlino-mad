import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import Title from './components/Title2';
import Input from './components/TextInput';
import Button from './components/ButtonOnClick';

const Registration = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    setTitle('Registering...');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);

    Alert.alert('Data Dikirim', 'Lihat hasil di console!');
  };

  return (
    <View style={styles.container}>
      <Title text={title} />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUsername}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan nomor telepon"
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        maxLength={13}
        isNumeric={true}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
