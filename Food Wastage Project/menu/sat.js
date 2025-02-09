import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const data = {
    breakfast: ["Upma", "Medu Vada", "Oats with Milk", "Tea / Coffee / Milk"],
    lunch: ["Rice", "Sambar", "Aloo Matar", "Chapati", "Curd", "Salad"],
    snacks: ["Dhokla", "Tea / Coffee"],
    dinner: ["Jeera Rice", "Paneer Butter Masala", "Roti", "Dal Makhani", "Pickle", "Gajar Halwa"]

};

const Saturday = () => {
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
      <Text style={styles.title}>Saturday's Menu</Text>

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

export default Saturday;
