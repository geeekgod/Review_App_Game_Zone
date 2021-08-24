import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(8),
  body: yup.string().required().min(15),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number from 1 to 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text>{props.touched.title && props.errors.title}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
              multiline
            />
            <Text>{props.touched.body && props.errors.body}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Ratings (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("body")}
              keyboardType="numeric"
            />
            <Text>{props.touched.rating && props.errors.rating}</Text>
            <Button
              title="Submit Reviews"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
