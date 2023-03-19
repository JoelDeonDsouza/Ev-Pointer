import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// navigation //
import { useNavigation } from '@react-navigation/native';

const chargingData = {
    id:"1.0",
    title:"Locate Charging Station",
    img:"https://img.icons8.com/external-filled-color-icons-papa-vector/512/external-charging-electric-vehicle-charging-icons-color-filled-others-papa-vector.png",
    screen:"MapScreen"
}

const ChargingStations = () => {
    const navigation = useNavigation();
  return (
    <FlatList 
        data={[chargingData]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}  style={[tw`p-2 pl-4 pb-8 pt-8 m-2 w-40 rounded-2xl`, styles.backgroundColor]}>
                <View>
                    <Image source={{uri:item.img}} style={styles.img}/>
                    <Text style={styles.textImg}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default ChargingStations

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:"#BAD7E9",
    },
    img:{
        width: 140,
        height: 150,
        resizeMode:"contain",
    },
    textImg:{
       fontSize: 12,
       fontWeight: "bold",
       color:"#0A2647"
    }
});
  