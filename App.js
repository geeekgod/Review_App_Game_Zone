import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet} from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import DrawerRoute from './routes/Drawer'

const getFonts = () => Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

getFonts();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {

    return <DrawerRoute/>
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
    );
  }
}

const styles = StyleSheet.create({});
