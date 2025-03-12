import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  maxLength,
  isNumeric = false,
}: {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  maxLength?: number;
  isNumeric?: boolean;
}) => {
  const handleTextChange = (text: string) => {
    if (isNumeric) {
      const filteredText = text.replace(/[^0-9]/g, ''); // Hanya angka
      onChangeText(filteredText);
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        keyboardType={isNumeric ? 'numeric' : keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default Input;
