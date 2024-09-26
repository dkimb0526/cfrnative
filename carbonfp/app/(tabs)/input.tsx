import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  // State to store peak, off-peak, and total usage for each month
  const [energyUsage, setEnergyUsage] = useState(
    Array(12).fill({
      homeUsage: '',
      driveUsage: '',
      trashUsage: ''
    })
  );

  // Function to update the energy usage for a specific month and type
  const handleInputChange = (text, index, type) => {
    const updatedUsage = [...energyUsage];
    updatedUsage[index] = {
      ...updatedUsage[index],
      [type]: text
    };
    setEnergyUsage(updatedUsage);
  };

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {months.map((month, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>{month} Energy Usage</Text>
            
            <Text style={styles.subLabel}>Home Energy Usage (kWh)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'peakUsage')}
              value={energyUsage[index].peakUsage}
              placeholder={`Enter peak usage for ${month}`}
              keyboardType="numeric"
            />

            <Text style={styles.subLabel}>Total Driving (mi)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'offPeakUsage')}
              value={energyUsage[index].offPeakUsage}
              placeholder={`Enter off-peak usage for ${month}`}
              keyboardType="numeric"
            />

            <Text style={styles.subLabel}>Total Trash (kg)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'totalUsage')}
              value={energyUsage[index].totalUsage}
              placeholder={`Enter total usage for ${month}`}
              keyboardType="numeric"
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure SafeAreaView takes the full screen height
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 24, // Adds more spacing between each month input section
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  subLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    borderColor: '#ccc',
  },
});
