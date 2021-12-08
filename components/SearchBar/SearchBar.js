import React from 'react';
import {Text, TextInput, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Feather} from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={tw`px-5 mt-6`}>
            <View style={tw`flex flex-row items-center justify-center`}>
                <View style={tw` bg-gray-800 h-9 rounded-lg w-full flex-row items-center`}>
                    <Feather style={[tw`text-gray-700`, {marginLeft: 10}]} name="search" size={24} color="#bdbdbd" />
                    <Text style={[tw`text-gray-700`, {marginLeft: 10}]}>Search</Text>
                </View>
            </View>
        </View>
    );
};

export default SearchBar;
