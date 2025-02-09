import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [role, setRole] = useState('student');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (role === 'student' && id === '1' && password === '1') {
      navigation.replace('StudentHome');
    } else if (role === 'admin' && id === '1' && password === '1') {
      navigation.replace('AdminHome');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.roleSelector}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'student' && styles.activeRole]}
          onPress={() => setRole('student')}
        >
          <Text style={[styles.roleText, role === 'student' && styles.activeRoleText]}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === 'admin' && styles.activeRole]}
          onPress={() => setRole('admin')}
        >
          <Text style={[styles.roleText, role === 'admin' && styles.activeRoleText]}>Admin</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder={role === 'student' ? 'Enter Roll Number' : 'Enter Admin ID'}
        value={id}
        onChangeText={setId}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  roleSelector: {
    width:300,
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  roleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  activeRole: {
    backgroundColor: '#007bff',
  },
  activeRoleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LoginScreen;
