import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {RootStackParamsList} from "@/types/Navigations";
import DetailsScreen from "@/screens/DetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigation;