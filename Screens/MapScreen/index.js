import { StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// Components //
import MapComponent from "../../Components/MapComponent";
import Destination from "../../Components/Destination";
import NavigationOptions from "../../Components/NavigationOptions";

// navigation //
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapComponent />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="Destination"
            component={Destination}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NavigationOptions"
            component={NavigationOptions}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
