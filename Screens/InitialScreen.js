import { StyleSheet, SafeAreaView, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// components //
import ChargingStations from "../Components/ChargingSations";

const InitialScreen = () => {
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`p-5`}>
        <View style={styles.logoUserContainer}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/116739729?s=200&v=4",
            }}
            style={styles.logo}
          />
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/8991/8991597.png",
            }}
            style={styles.user}
          />
        </View>
        <ChargingStations />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  logoUserContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 30,
  },
  user: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginBottom: 30,
  },
});
