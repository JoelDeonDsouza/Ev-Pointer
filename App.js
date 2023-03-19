import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// redux //
import { Provider } from "react-redux";
import InitialScreen from "./Screens/InitialScreen";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <InitialScreen />
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
