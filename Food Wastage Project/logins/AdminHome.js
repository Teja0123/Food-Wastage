import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style';
import { Button } from 'react-native-paper';

const AdminHome = ({navigation}) => {
  function func(){
    navigation.navigate("Login")
      
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Admin</Text>
      <Button mode="contained" onPress={func}  >back</Button>
    </View>
  );
};

export default AdminHome;
