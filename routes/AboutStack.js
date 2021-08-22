import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from '../shared/Header';

const { Navigator, Screen } = createStackNavigator();

const Aboutnavigator = () => (
  <Navigator
    initialRouteName="About"
    screenOptions={{
      title: "About Game Zone",
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="About"
      options={{
        headerTitle: () => <Header title={"About GameZone"}/>,
        headerTitleAlign:'center'
      }}
      component={About}
    />
  </Navigator>
);

export const AboutStack = () => (
    <Aboutnavigator />
);

export default AboutStack;
