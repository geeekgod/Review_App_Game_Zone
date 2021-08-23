import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "../shared/Card";
import {globalStyles, images} from "../styles/Global";

const ReviewDetails = ({ route, navigation }) => {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Game Zone rating:</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {},
});

export default ReviewDetails;
