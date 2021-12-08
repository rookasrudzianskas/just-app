import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from "../../components/Header";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    return (
        <View style={tw`mt-16`}>
            <Header />
        </View>
    );
};

export default HomeScreen;
