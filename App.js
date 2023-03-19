import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaProvider } from "react-native";
// redux //
import { Provider } from "react-redux";
import { store } from "./store";
// Navigation //
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens //
import InitialScreen from "./Screens/InitialScreen";
import MapScreen from "./Screens/MapScreen";

// stack navigation //
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="InitialScreen"
            component={InitialScreen}
          />
          {/* map */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="MapScreen"
            component={MapScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
