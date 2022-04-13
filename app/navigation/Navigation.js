import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "@screens/Home";
import ToDoCreate from "@screens/ToDoCreate";

export default function Navigation(){
    const RootStack = createStackNavigator();

    return <NavigationContainer>
        <RootStack.Navigator mode="modal">
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="ToDoCreate" component={ToDoCreate}  />
        </RootStack.Navigator>
    </NavigationContainer>;
}