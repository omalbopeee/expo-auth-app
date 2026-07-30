import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigations/RootNavigation";
import {StatusBar} from "expo-status-bar";

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigation />
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
};

