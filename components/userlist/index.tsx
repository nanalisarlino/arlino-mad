// userlist.js
import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';

const Account = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => {
        console.log('API Response:', res.data.data);
        setUsers(res.data.data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {users.map(user => (
        <View key={user.id} style={styles.card}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <View>
            <Text style={styles.name}>
              <Text style={styles.bold}>{user.last_name}</Text>{' '}
              {user.first_name}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});
