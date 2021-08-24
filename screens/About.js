import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Game Zone is a Review App where you can create reviews. Developed By -
        Rishabh Singh
      </Text>
    </View>
  );
};

export default About;
