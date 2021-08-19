import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../styles/Global'

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    );
}

export default Home