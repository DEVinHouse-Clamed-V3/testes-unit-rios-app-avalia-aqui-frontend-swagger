import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootSrack from "./src/navigation/RootStack";

export default function App() {
    return (
        <NavigationContainer>
            <RootSrack />
        </NavigationContainer>
    );
}

