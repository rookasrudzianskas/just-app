import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen/Homescreen";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`bg-black flex flex-1`}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
