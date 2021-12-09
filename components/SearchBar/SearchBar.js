import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
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


            <View style={tw`flex flex-row justify-between mt-5 items-center`}>
                <TouchableOpacity>
                <View style={tw`bg-gray-900 px-3 py-2 rounded-lg`}>
                    <Text style={tw`text-gray-200 font-bold`}>Accounts</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View>
                    <Text style={tw`text-gray-700 font-bold`}>Cards</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View>
                    <Text style={tw`text-gray-700 font-bold`}>Stocks</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View>
                    <Text style={tw`text-gray-700 font-bold`}>Crypto</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View>
                    <Text style={tw`text-gray-700 font-bold`}>Vault</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBar;

