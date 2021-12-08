import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";

const Header = () => {
    return (
        <View style={tw`px-5`}>
            <View>
                <Image source={{uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'}} style={[tw`w-10 h-10 rounded-full`]} />
            </View>
            <View>

            </View>
        </View>
    );
};

export default Header;
