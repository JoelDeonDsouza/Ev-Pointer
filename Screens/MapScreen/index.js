import { StyleSheet, Text, View,  Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// Components //
import MapComponent from "../../Components/MapComponent"; 

const MapScreen = () => {
  return (
    <View>
       <View style={tw`h-1/2`}>
          <MapComponent />
       </View>
       <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
});
  