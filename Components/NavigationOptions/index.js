import React from 'react'
import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const NavigationOptions = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={tw`text-center py-5 text-xl text-white`}>
     Select Charging stations
    </Text>
  </SafeAreaView>
  )
}

export default NavigationOptions

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000000",
      flex: 1,
    }
});
