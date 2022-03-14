import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from './Screens/Home';
import Feed from "./Screens/Feed";
import Profile from "./Screens/Profile";

import TabNavigation from "./TabNavigation";
import DrawerNavigation from "./DrawerNavigation"

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
};



const Stack = createNativeStackNavigator()

export default function Navigation(){

    return(
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator 
                initialRouteName="Home"  
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Feed" component={DrawerNavigation}/>
                <Stack.Screen name="Profile" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}