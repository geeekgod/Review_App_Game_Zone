import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import globalStyles from '../styles/Global';

const ReviewDetails = ({route,navigation}) => {
    const { title, body, rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    );
}


export default ReviewDetails