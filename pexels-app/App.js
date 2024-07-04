import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import { Image, StyleSheet, Text } from "react-native";
import logo from "./assets/logodymosc.png";

const stack = createNativeStackNavigator();

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={logo} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: "white", fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Cerrar" : "Buscar"}
              </Text>
            ),
            title: "Aless App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1a1a1a",
            },
          }}
        >
          {(props => <HomeScreen {...props} openSearch={openSearch}/>)}
        </stack.Screen>
        <stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{
          title: "Aless App",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
        }}
        />
      </stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
    borderRadius: 5,
  },
});
