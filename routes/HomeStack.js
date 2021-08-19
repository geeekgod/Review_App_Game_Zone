import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      title: "Game Zone",
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="Home"
      component={Home}
    />
    <Screen
      name="Details"
      component={ReviewDetails}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
