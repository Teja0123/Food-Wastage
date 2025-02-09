import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const data = {
  breakfast: ["Poha", "Boiled Eggs", "Cornflakes with Milk", "Tea / Coffee / Milk"],
    lunch: ["Rice", "Dal Fry", "Mix Vegetable Curry", "Chapati", "Curd", "Salad"],
    snacks: ["Samosa", "Tea / Coffee"],
    dinner: ["Jeera Rice", "Rajma Masala", "Roti", "Paneer Butter Masala", "Pickle", "Gulab Jamun"]
  
};

const Tuesday = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handlePress = (mealType) => {
    setSelectedMeal(mealType === selectedMeal ? null : mealType); // Toggle dropdown visibility
  };

  const renderMenu = (mealType) => {
    const menuItems = data[mealType];
    return (
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => <Text key={index} style={styles.menuItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tuesday's Menu</Text>

      {/* Breakfast Section */}
      <View style={styles.section}>
        <Button title="Breakfast" onPress={() => handlePress('breakfast')} />
        {selectedMeal === 'breakfast' && renderMenu('breakfast')}
      </View>

      {/* Lunch Section */}
      <View style={styles.section}>
        <Button title="Lunch" onPress={() => handlePress('lunch')} />
        {selectedMeal === 'lunch' && renderMenu('lunch')}
      </View>

      {/* Snacks Section */}
      <View style={styles.section}>
        <Button title="Snacks" onPress={() => handlePress('snacks')} />
        {selectedMeal === 'snacks' && renderMenu('snacks')}
      </View>

      {/* Dinner Section */}
      <View style={styles.section}>
        <Button title="Dinner" onPress={() => handlePress('dinner')} />
        {selectedMeal === 'dinner' && renderMenu('dinner')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    padding: 5,
  },
});

export default Tuesday;
