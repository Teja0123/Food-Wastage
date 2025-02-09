import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const data = {
    breakfast: ["Paratha with Curd", "Sprouts", "Oats Porridge", "Tea / Coffee / Milk"],
    lunch: ["Rice", "Rasam", "Bhindi Masala", "Chapati", "Chana Dal", "Curd", "Salad"],
    snacks: ["Cutlet", "Tea / Coffee"],
    dinner: ["Lemon Rice", "Chole Masala", "Roti", "Paneer Bhurji", "Pickle", "Kheer"]
 
};

const Thursday = () => {
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
      <Text style={styles.title}>Thursday's Menu</Text>

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

export default Thursday;
