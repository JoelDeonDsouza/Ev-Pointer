import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable
} from "react-native";
import tw from "tailwind-react-native-classnames";

const Destination = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-center py-5 text-xl text-white`}>
        Locate nearest charging stations
      </Text>
      <View>
        <TextInput  style={styles.input}   placeholder= "Enter location"    placeholderTextColor="#eee"  />
      </View>
      <View>
        <TextInput  style={styles.input}   placeholder= "Enter destination"    placeholderTextColor="#eee"  />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('NavigationOptions')}>
            <Text style={styles.text}>Search</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white",
    borderRadius: 25,
   
  },
  btnContainer:{
    display: "flex",
    alignItems: "center",
    padding: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eee',
    width: 200,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
});
