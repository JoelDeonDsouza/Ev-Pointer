import { StyleSheet, SafeAreaView, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// components //
import ChargingStations from "../Components/ChargingSations";

const InitialScreen = () => {
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`p-5`}>
         <Image source={{uri:"https://avatars.githubusercontent.com/u/116739729?s=200&v=4"}} style={styles.logo}/>
         <ChargingStations />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
    logo:{
        width: 60,
        height: 60,
        resizeMode:"contain",
        marginBottom:30
    }
});
