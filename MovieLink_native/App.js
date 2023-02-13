import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieListScreen from "./app/screens/MovieListScreen";
import RegionSelectScreen from "./app/screens/RegionSelectScreen";
import SearchMovieScreen from "./app/screens/SearchMovieScreen";
import InformationScreen from "./app/screens/InformationScreen";

// import DetailsScreen from "./screens/DetailsScreen";
// import ImportantStuff from "./screens/ImportantStuff";

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Region Select Screen" component={RegionSelectScreen}/>
          <Stack.Screen name="Movie List" component={MovieListScreen} />
          <Stack.Screen name="Search Movie Screen" component={SearchMovieScreen} />
          <Stack.Screen name="Information Screen" component={InformationScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
