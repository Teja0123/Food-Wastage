import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        roomNumber: "",
        hostelName: "",
        foodQuality: "",
        leftoverFrequency: "",
        reasonForWastage: "",
        suggestion: "",
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const submitFeedback = () => {
        if (!formData.name || !formData.roomNumber || !formData.hostelName) {
            Alert.alert("Error", "Please fill in all required fields.");
            return;
        }

        Alert.alert("Feedback Submitted", 
            `Name: ${formData.name}\nRoom No: ${formData.roomNumber}\nHostel: ${formData.hostelName}
            \nFood Quality: ${formData.foodQuality}\nLeftover Frequency: ${formData.leftoverFrequency}
            \nReason for Wastage: ${formData.reasonForWastage}\nSuggestions: ${formData.suggestion}`
        );

        // Reset form after submission
        setFormData({
            name: "",
            roomNumber: "",
            hostelName: "",
            foodQuality: "",
            leftoverFrequency: "",
            reasonForWastage: "",
            suggestion: "",
        });
    };

    return (
        <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#f8f8f8" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Hostel Food Wastage Feedback</Text>

            {/* Student Details */}
            <Text style={styles.label}>Full Name *</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(value) => handleInputChange("name", value)}
            />

            <Text style={styles.label}>Room Number *</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your room number"
                keyboardType="numeric"
                value={formData.roomNumber}
                onChangeText={(value) => handleInputChange("roomNumber", value)}
            />

            <Text style={styles.label}>Hostel Name *</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your hostel name"
                value={formData.hostelName}
                onChangeText={(value) => handleInputChange("hostelName", value)}
            />

            {/* Food Quality */}
            <Text style={styles.label}>How would you rate the food quality?</Text>
            <TextInput
                style={styles.input}
                placeholder="Good / Average / Poor"
                value={formData.foodQuality}
                onChangeText={(value) => handleInputChange("foodQuality", value)}
            />

            {/* Food Wastage Frequency */}
            <Text style={styles.label}>How often do you leave food on your plate?</Text>
            <TextInput
                style={styles.input}
                placeholder="Rarely / Sometimes / Often"
                value={formData.leftoverFrequency}
                onChangeText={(value) => handleInputChange("leftoverFrequency", value)}
            />

            {/* Reason for Food Wastage */}
            <Text style={styles.label}>What is the main reason for food wastage?</Text>
            <TextInput
                style={styles.input}
                placeholder="Too much quantity, Bad taste, Not fresh, etc."
                value={formData.reasonForWastage}
                onChangeText={(value) => handleInputChange("reasonForWastage", value)}
            />

            {/* Suggestions */}
            <Text style={styles.label}>Any suggestions to reduce food wastage?</Text>
            <TextInput
                style={styles.input}
                placeholder="Your suggestions..."
                value={formData.suggestion}
                onChangeText={(value) => handleInputChange("suggestion", value)}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={submitFeedback}>
                <Text style={styles.buttonText}>Submit Feedback</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = {
    label: {
        fontWeight: "bold",
        marginTop: 10,
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 12,
        borderRadius: 5,
        marginTop: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
};

export default FeedbackForm;