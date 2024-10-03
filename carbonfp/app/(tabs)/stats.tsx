import React, { useContext, useState } from 'react';
import { EnergyContext } from '../context/EnergyContext'; // Import the context
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker for the dropdown

export default function TabThreeScreen() {
  const { energyUsage } = useContext(EnergyContext); // Access the energy data from context
  const [selectedMonth, setSelectedMonth] = useState(0); // State to keep track of selected month

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get data for the selected month
  const selectedData = energyUsage[selectedMonth];

  // Function to calculate and display the selected month's data
  const calculateMonthData = () => {
    const homeUsage = parseFloat(selectedData.homeUsage || 0);
    const driveUsage = parseFloat(selectedData.driveUsage || 0);
    const trashUsage = parseFloat(selectedData.trashUsage || 0);

    return { homeUsage, driveUsage, trashUsage };
  };

  const { homeUsage, driveUsage, trashUsage } = calculateMonthData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Select a Month to View Data</Text>
      
      {/* Dropdown to select the month */}
      <Picker
        selectedValue={selectedMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>

      {/* Display the data for the selected month */}
      <Text style={styles.dataText}>Home Energy Usage: {homeUsage} kWh</Text>
      <Text style={styles.dataText}>Total Driving: {driveUsage} miles</Text>
      <Text style={styles.dataText}>Total Trash: {trashUsage} kg</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 30,
  },
  dataText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
