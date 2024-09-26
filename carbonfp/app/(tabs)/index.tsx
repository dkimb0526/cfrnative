
import { Image, StyleSheet, Platform, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function HomeScreen() {

  //const [data, setData] = useState("");
  //const handleImagePress = () => Alert.prompt("whats up!", "written content", text => setData(text));

  return ( 
    <SafeAreaView style = {styles.container} >
      <Text style = {styles.welcometext}>
        Welcome to the Home Page
      </Text>
      <Text style = {styles.how}>
        How to use this app:
      </Text>
      <Text>
      1. Press the foot to move into the "Month Input" section
      </Text>
      <Text style = {styles.twotext}>
      2. Input your data into the "Month Input" section
      </Text>
      <Text style = {styles.twotext}>
      3. Move to the "Month Stats" section and select a month 
      </Text>
      <Text style = {styles.twotext}>
      4. View your carbon footprint 
      </Text>
      <Text style = {styles.twotext}>
      5. View your weekly progress through the graph
      </Text>
      <Text style = {styles.twotext}>
      6. Implement our tips and help save the world step by step!
      </Text>
      <TouchableWithoutFeedback > 
      <Image source={require('@/assets/images/Screenshot 2024-09-15 091203.png')}>
      </Image>
      </TouchableWithoutFeedback>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',

  },
  welcometext:{
    fontSize: 20,
    color: "green",
    fontWeight: 'bold',
    padding: 30,
  },
  twotext: {
    alignItems: 'center',
  },
  how: {
    padding: 10,
    fontWeight: 'bold',
  }
});