import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "ChargePoint",
    distance: "800mm",
    time:10
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "ABB",
    distance: "1.5km",
    time:18
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "BP",
    distance: "1.8km",
    time:26
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d98",
    title: "Shell",
    distance: "2km",
    time:34
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dy6",
    title: "ABB",
    distance: "2.6km",
    time:48
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d99",
    title: "BP",
    distance: "2.8km",
    time:52
  },
];
const NavigationOptions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-center py-5 text-xl text-white`}>
        Select Charging stations
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Map")} style={styles.item}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={tw`py-1 text-sm text-white`}>{item.distance}</Text>
            </View>
            <View>
              <Text style={styles.time}>{item.time}{" "}minutes</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default NavigationOptions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  item: {
    backgroundColor: "#2E3840",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  time:{
    color: "white",
    fontSize:12,
    }
});
