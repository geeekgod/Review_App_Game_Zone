import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const onMenuClick = () => {
    useNavigation();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={onMenuClick}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Game Zone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
      marginLeft:0,
      marginRight:'auto',
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    marginLeft:'auto',
    marginRight:'auto',
    textAlign:'center',
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginHorizontal: "auto",
  },
});

export default Header;
