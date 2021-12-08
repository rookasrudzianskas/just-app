import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={tw`px-5 flex-row items-center`}>
            <View style={tw`flex flex-1`}>
                <TouchableOpacity>
                    <Image source={{uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'}} style={[tw`w-10 h-10 rounded-full`, {resizeMode: 'contain'}]} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity>
                    <Ionicons name="md-stats-chart" size={20} color="white" style={tw`mx-2`}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="star" size={20} color="white" style={tw`mx-2`}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="bell" size={20} color="white" style={tw`mx-2`}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
