import tw from "tailwind-react-native-classnames";
// map view //
import MapView, {Marker} from 'react-native-maps';


const MapComponent = () => {
  return (
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
  >
  <Marker coordinate={{ latitude: 52.430845, longitude: 13.533905 }} title="EV" identifier="origin"/>
  </MapView>
  )
}

export default MapComponent;
