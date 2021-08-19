import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import globalStyles from '../styles/Global';

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    );
}

export default About