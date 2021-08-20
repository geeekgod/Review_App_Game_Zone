import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Game Zone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginHorizontal: 'auto'
  },
});

export default Header;
