import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView,Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getAllRegions } from "../services/RegionServices";
import { SelectList } from "react-native-dropdown-select-list";


const RegionSelectScreen = () => {
  const [regions, setRegions] = useState([]);
  const [justRegions, setJustRegions] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getAllRegions()
      .then((regionsData) => setRegions(regionsData))
      .catch((err) => console.error(err));
      makeObject()
    }, []);
    
    function makeObject() {
      
    const newObject = regions.map((region)=>{
        return{
            value:region.regionName
        }
    })
    console.log(newObject);
    setJustRegions(newObject)
    console.log(justRegions)
    
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text> Select Your Country Below</Text>
         <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={justRegions} 
        save="value"
        />
        <Button
        title="Get Available Movies"
        onPress={() => navigation.navigate('Movie List')}
        selected = {selected}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  // flex: 1,
  // backgroundColor: '#fff',
  // alignItems: 'center',
  // justifyContent: 'center',
  // },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RegionSelectScreen;
