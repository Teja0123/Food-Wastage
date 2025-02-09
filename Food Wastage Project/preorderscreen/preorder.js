import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Checkbox } from "react-native-paper";

const PreOrderScreen = () => {
  const [checked, setChecked] = useState({
    breakfast: false,
    lunch: false, // Checked by default
    snacks: false,
    dinner: false,
  });

  const handleCheck = (meal) => {
    setChecked({ ...checked, [meal]: !checked[meal] });
  };

  const handleSubmit = () => {
    const selectedMeals = Object.keys(checked).filter((meal) => checked[meal]);
    Alert.alert("Food Wastage Update", `Not having: ${selectedMeals.join(", ")}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avoid Food Wastage</Text>
    <View style={{marginLeft:20}}>
      <View style={styles.option}>
        <Checkbox status={checked.breakfast ? "checked" : "unchecked"} onPress={() => handleCheck("breakfast")} />
        <Text style={styles.text}>Not having <Text style={styles.bold}>BREAKFAST</Text> Tomorrow.</Text>
      </View>

      <View style={styles.option}>
        <Checkbox status={checked.lunch ? "checked" : "unchecked"} onPress={() => handleCheck("lunch")} />
        <Text style={styles.text}>Not having <Text style={styles.bold}>LUNCH</Text> Tomorrow.</Text>
      </View>

      <View style={styles.option}>
        <Checkbox status={checked.snacks ? "checked" : "unchecked"} onPress={() => handleCheck("snacks")} />
        <Text style={styles.text}>Not having <Text style={styles.bold}>SNACKS</Text> Tomorrow.</Text>
      </View>

      <View style={styles.option}>
        <Checkbox status={checked.dinner ? "checked" : "unchecked"} onPress={() => handleCheck("dinner")} />
        <Text style={styles.text}>Not having <Text style={styles.bold}>DINNER</Text> Tomorrow.</Text>
      </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        <Text style={styles.bold}>NOTE :</Text> If any changes, update 3 hrs before the meal timings.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "navy",
    paddingVertical: 10,
    marginTop: 20,
    alignSelf: "center",
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "navy",
    fontSize: 18,
    fontWeight: "bold",
  },
  note: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
});

export default PreOrderScreen;