import React from "react";
import {Image} from 'react-native';
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
        headerBackground: ()=> <Image source={require("../assets/game_bg.png")} style={{height:"100%"}}/>,
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
