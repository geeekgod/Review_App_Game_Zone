import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";

const ReviewForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        onSubmit={(values) => {console.log(values)}}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChange={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review Body"
              onChange={props.handleChange("body")}
              value={props.values.body}
              multiline
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Ratings (1-5)"
              onChange={props.handleChange("rating")}
              value={props.values.rating}
            />
            <Button title='Submit Reviews' color='maroon' onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
