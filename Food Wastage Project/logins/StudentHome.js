import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const options = [
  { id: '1', title: 'Menu', icon: 'utensils', screen: 'MenuScreen' },
  { id: '2', title: 'Pre Ordering', icon: 'calendar-check', screen: 'PreOrderScreen' },
  { id: '3', title: 'Dashboard', icon: 'chart-bar', screen: 'DashboardScreen' },
  { id: '4', title: 'Hall Status', icon: 'percentage', screen: 'HallStatusScreen' },
  { id: '5', title: 'Feedback', icon: 'comments', screen: 'FeedbackForm' }
];

const StudentHome = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.StudentHomeCard}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={40} color="#fffff" style={styles.StudentHomeIcon} />
      <Text style={styles.StudentHomeCardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.StudentHomeContainer}>
      <Text style={styles.StudentHomeTitle}>Student Dashboard</Text>
      <FlatList style={{width:380}}
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  StudentHomeContainer: {
    width:"100%",
    height:"100%",
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  StudentHomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  StudentHomeCard: {
    width:200,
    height:200,
    flex: 1,
    backgroundColor: '#007bff',
 
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  StudentHomeCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  StudentHomeIcon: {
    marginBottom: 10,
  },
});

export default StudentHome;
