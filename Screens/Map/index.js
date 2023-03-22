import { View, StyleSheet, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.container}>
      <View style={tw`min-h-full`}>
        <MapView
          style={tw`flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: 52.430845,
            longitude: 13.533905,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            showsUserLocation: true,
          }}
        ></MapView>
        <View style={styles.btn}>
          <Button title="⚙︎"></Button>
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: 65,
    height: 65,
    backgroundColor: "transparent",
    position: "absolute",
    top: "90%",
    left: "80%",
    zIndex: 10,
  },
});
