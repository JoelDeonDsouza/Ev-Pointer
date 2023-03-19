import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const chargingData = {
    id:"1.0",
    title:"Locate Charging Station",
    img:"https://i.ibb.co/SnGbm6v/b67e6244b80fc5fc8056cd91f2979dea-removebg-preview.png",
    screen:"Map"
}



const ChargingStations = () => {
  return (
    <FlatList 
        data={[chargingData]}
        renderItem={({item}) => (
            <TouchableOpacity style={[tw`p-2 pl-5 pb-8 pt-8 m-2 w-40 rounded-2xl`, styles.backgroundColor]}>
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
        width: 105,
        height: 150,
        resizeMode:"contain"
    },
    textImg:{
       fontSize: 11,
       fontWeight: "bold",
       color:"#0A2647"
    }
});
  