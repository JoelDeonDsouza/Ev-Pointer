import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from "react-native";

const Destination = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoUserContainer}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/116739729?s=200&v=4",
          }}
          style={styles.logo}
        />
        <Image
          style={styles.user}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome to BlitzCharge</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter location to locate nearest charging stations"
          placeholderTextColor="#eee"
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("NavigationOptions")}
        >
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
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
    padding: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#eee",
    width: 200,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000",
  },
  logoUserContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 30,
  },
  user: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 30,
    marginRight: 10,
  },
  welcomeText: {
    color: "white",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
